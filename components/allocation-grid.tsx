"use client"

import React from "react"

import { useState } from "react"
import type { Project, User, Allocation, Position } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { AllocationCell } from "./allocation-cell"
import { ProjectManager } from "./project-manager"
import { UnallocatedPositions } from "./unallocated-positions"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const YEARS = Array.from({ length: 10 }, (_, i) => 2024 + i)

export function AllocationGrid() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Project A",
      color: "#3B82F6",
      positions: [],
      startMonth: 0,
      startYear: 2024,
      endMonth: 11,
      endYear: 2024,
    },
    {
      id: "2",
      name: "Project B",
      color: "#10B981",
      positions: [],
      startMonth: 0,
      startYear: 2024,
      endMonth: 11,
      endYear: 2024,
    },
  ])

  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "John Doe", department: "Engineering" },
    { id: "2", name: "Jane Smith", department: "Engineering" },
    { id: "3", name: "Bob Johnson", department: "Design" },
  ])

  const [allocations, setAllocations] = useState<Allocation[]>([])
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [startMonth, setStartMonth] = useState(0)
  const [startYear, setStartYear] = useState(2024)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState(0)
  const [showUnallocatedModal, setShowUnallocatedModal] = useState(false)
  const [pendingAllocation, setPendingAllocation] = useState<{ userId: string; monthIndex: number } | null>(null)
  const [showUserModal, setShowUserModal] = useState(false)
  const [editingUserId, setEditingUserId] = useState<string | null>(null)
  const [editingUserName, setEditingUserName] = useState("")
  const [editingUserDept, setEditingUserDept] = useState("")
  const [selectedCellMonth, setSelectedCellMonth] = useState<number | null>(null)
  const [selectedCellUser, setSelectedCellUser] = useState<string | null>(null)
  const [showPositionModal, setShowPositionModal] = useState(false)

  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project])
  }

  const updateProject = (projectId: string, updates: Partial<Project>) => {
    setProjects((prev) => prev.map((p) => (p.id === projectId ? { ...p, ...updates } : p)))
  }

  const deleteProject = (projectId: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId))
    setAllocations((prev) => prev.filter((a) => a.projectId !== projectId))
  }

  const addUser = () => {
    setEditingUserId(null)
    setEditingUserName("")
    setEditingUserDept("")
    setShowUserModal(true)
  }

  const editUser = (userId: string) => {
    const user = users.find((u) => u.id === userId)
    if (user) {
      setEditingUserId(userId)
      setEditingUserName(user.name)
      setEditingUserDept(user.department)
      setShowUserModal(true)
    }
  }

  const saveUserChanges = () => {
    if (!editingUserName.trim()) return

    if (editingUserId) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUserId ? { ...u, name: editingUserName, department: editingUserDept } : u)),
      )
    } else {
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: editingUserName,
        department: editingUserDept,
      }
      setUsers((prev) => [...prev, newUser])
    }

    setShowUserModal(false)
    setEditingUserId(null)
    setEditingUserName("")
    setEditingUserDept("")
  }

  const deleteUser = (userId: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId))
    setAllocations((prev) => prev.filter((a) => a.userId !== userId))
  }

  const updatePositions = (newPositions: Position[]) => {
    const updatedProjects = projects.map((project) => ({
      ...project,
      positions: newPositions.filter((p) => p.projectId === project.id),
    }))
    setProjects(updatedProjects)
  }

  const handleMonthClick = (monthIndex: number) => {
    setSelectedMonth(selectedMonth === monthIndex ? null : monthIndex)
  }

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(startYear, startMonth + i, 1)
    return {
      month: date.getMonth(),
      year: date.getFullYear(),
      globalIndex: startMonth + i,
      display: `${MONTHS[date.getMonth()].slice(0, 3).toUpperCase()} ${String(date.getFullYear()).slice(-2)}`,
    }
  })

  const handleEmptyCellClick = (userId: string, monthIndex: number) => {
    console.log("[v0] Empty cell clicked:", { userId, monthIndex, selectedMonth })
    setSelectedCellUser(userId)
    setSelectedCellMonth(monthIndex)
    setShowPositionModal(true)
  }

  const handleAddAllocation = (projectId: string, positionName: string) => {
    if (selectedCellUser && selectedCellMonth !== null) {
      const newAllocation: Allocation = {
        id: `alloc-${Date.now()}`,
        userId: selectedCellUser,
        projectId,
        monthIndex: selectedCellMonth,
        percentage: 0,
        positionName,
      }
      setAllocations((prev) => [...prev, newAllocation])

      // Update allocated amount in positions
      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId
            ? {
                ...p,
                positions: p.positions?.map((pos) =>
                  pos.monthIndex === selectedCellMonth && pos.name === positionName
                    ? { ...pos, allocated: (pos.allocated || 0) + 1 }
                    : pos,
                ),
              }
            : p,
        ),
      )

      setShowPositionModal(false)
      setSelectedCellUser(null)
      setSelectedCellMonth(null)
    }
  }

  const handleRemoveAllocation = (allocationId: string) => {
    const allocation = allocations.find((a) => a.id === allocationId)
    if (allocation) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === allocation.projectId
            ? {
                ...p,
                positions: p.positions?.map((pos) =>
                  pos.monthIndex === allocation.monthIndex && pos.name === allocation.positionName
                    ? { ...pos, allocated: Math.max(0, (pos.allocated || 0) - 1) }
                    : pos,
                ),
              }
            : p,
        ),
      )
    }
    setAllocations((prev) => prev.filter((a) => a.id !== allocationId))
  }

  const handleEditAllocation = (allocationId: string, newPercentage: number) => {
    setAllocations((prev) => prev.map((a) => (a.id === allocationId ? { ...a, percentage: newPercentage } : a)))
    setEditingId(null)
    setEditValue(0)
  }

  const groupedUsers = Array.from(
    users.reduce((acc, user) => {
      if (!acc.has(user.department)) {
        acc.set(user.department, [])
      }
      acc.get(user.department)!.push(user)
      return acc
    }, new Map<string, User[]>()),
  ).map(([dept, deptUsers]) => ({
    department: dept,
    users: deptUsers,
  }))

  return (
    <div className="space-y-4 p-6">
      <div className="flex justify-between items-start gap-4">
        <div>
          <ProjectManager
            projects={projects}
            positions={projects.flatMap((p) => p.positions || [])}
            months={MONTHS}
            startMonth={startMonth}
            startYear={startYear}
            onAddProject={addProject}
            onUpdateProject={updateProject}
            onDeleteProject={deleteProject}
            onUpdatePositions={updatePositions}
          />
        </div>
        <div className="flex gap-4 items-end">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Starting Month</label>
            <select
              value={startMonth}
              onChange={(e) => setStartMonth(Number.parseInt(e.target.value))}
              className="border rounded px-2 py-1"
            >
              {MONTHS.map((month, idx) => (
                <option key={month} value={idx}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Starting Year</label>
            <select
              value={startYear}
              onChange={(e) => setStartYear(Number.parseInt(e.target.value))}
              className="border rounded px-2 py-1"
            >
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2 rounded-full">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Staff Allocations</h2>
          <Button onClick={addUser} variant="default" size="sm">
            + Add User
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-gray-100 w-32">Staff</th>
                {months.map((month, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 p-2 bg-gray-100 w-32 cursor-pointer hover:bg-gray-200 text-sm"
                    onClick={() => handleMonthClick(month.globalIndex)}
                  >
                    {month.display}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groupedUsers.map((group) => (
                <React.Fragment key={group.department}>
                  <tr>
                    <td colSpan={months.length + 1} className="border border-gray-300 p-2 font-bold text-[rgba(87,1,1,1)] bg-[rgba(109,152,226,1)]">
                      {group.department}
                    </td>
                  </tr>
                  {group.users.map((user) => (
                    <tr key={user.id}>
                      <td className="border border-gray-300 p-2 w-32">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm">{user.name}</span>
                          <button
                            onClick={() => editUser(user.id)}
                            className="text-blue-600 hover:text-blue-800 text-sm"
                          >
                            ✏️
                          </button>
                        </div>
                      </td>
                      {months.map((month) => (
                        <AllocationCell
                          key={`${user.id}-${month.globalIndex}`}
                          userId={user.id}
                          monthIndex={month.globalIndex}
                          allocations={allocations.filter(
                            (a) => a.userId === user.id && a.monthIndex === month.globalIndex,
                          )}
                          project={projects.find((p) => p.id === allocations[0]?.projectId)}
                          projects={projects}
                          month={month}
                          onEdit={(id) => {
                            setEditingId(id)
                            const alloc = allocations.find((a) => a.id === id)
                            if (alloc) setEditValue(alloc.percentage)
                          }}
                          onSaveEdit={handleEditAllocation}
                          onRemove={handleRemoveAllocation}
                          onEmptyCellClick={() => handleEmptyCellClick(user.id, month.globalIndex)}
                        />
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showUserModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">{editingUserId ? "Edit User" : "Add User"}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={editingUserName}
                  onChange={(e) => setEditingUserName(e.target.value)}
                  className="w-full border rounded px-2 py-1"
                  placeholder="User name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Department</label>
                <input
                  type="text"
                  value={editingUserDept}
                  onChange={(e) => setEditingUserDept(e.target.value)}
                  className="w-full border rounded px-2 py-1"
                  placeholder="Department"
                />
              </div>
              <div className="flex gap-2 justify-end">
                {editingUserId && (
                  <Button
                    variant="destructive"
                    onClick={() => {
                      deleteUser(editingUserId)
                      setShowUserModal(false)
                    }}
                  >
                    Delete
                  </Button>
                )}
                <Button variant="outline" onClick={() => setShowUserModal(false)}>
                  Cancel
                </Button>
                <Button onClick={saveUserChanges}>Save</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPositionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">Select Position</h3>
            <div className="space-y-2">
              {selectedCellMonth !== null &&
                projects.map((project) => {
                  const projectStartGlobalIndex = project.startMonth + project.startYear * 12
                  const selectedGlobalIndex = selectedCellMonth + startYear * 12
                  const relativeMonthIndex = selectedGlobalIndex - projectStartGlobalIndex

                  console.log("[v0] Position filtering:", {
                    selectedCellMonth,
                    projectStartMonth: project.startMonth,
                    projectStartYear: project.startYear,
                    relativeMonthIndex,
                  })

                  const monthPositions = project.positions?.filter((p) => p.monthIndex === relativeMonthIndex) || []

                  console.log("[v0] Found positions:", monthPositions.length)

                  return monthPositions.map((position) => (
                    <button
                      key={position.id}
                      onClick={() => {
                        handleAddAllocation(project.id, position.name || "")
                      }}
                      className="w-full text-left p-3 rounded border border-gray-300 hover:bg-blue-50"
                    >
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-gray-600">{position.name || "Unnamed"}</div>
                      <div className="text-sm text-gray-500">{position.percentage}%</div>
                    </button>
                  ))
                })}
            </div>
            <Button variant="outline" onClick={() => setShowPositionModal(false)} className="w-full mt-4">
              Close
            </Button>
          </div>
        </div>
      )}

      <UnallocatedPositions
        projects={projects}
        allocations={allocations}
        selectedMonth={selectedMonth}
        displayMonths={months}
      />
    </div>
  )
}
