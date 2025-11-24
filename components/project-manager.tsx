"use client"
import { useState } from "react"
import type { Project, Position } from "./allocation-grid"

interface ProjectManagerProps {
  projects: Project[]
  positions: Position[]
  months: string[]
  startMonth?: number
  startYear?: number
  onAddProject: (project: Project) => void
  onUpdateProject: (projectId: string, updates: Partial<Project>) => void
  onDeleteProject: (projectId: string) => void
  onUpdatePositions: (positions: Position[]) => void
}

interface PositionBudget {
  id: string
  name: string
  budgets: Record<number, number>
}

export function ProjectManager({
  projects,
  positions = [],
  months,
  startMonth = 0,
  startYear = 2024,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onUpdatePositions,
}: ProjectManagerProps) {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null)
  const [newProjectName, setNewProjectName] = useState("")
  const [selectedColor, setSelectedColor] = useState("#3B82F6")
  const [positionBudgets, setPositionBudgets] = useState<PositionBudget[]>([])
  const [projectStartMonth, setProjectStartMonth] = useState(0)
  const [projectStartYear, setProjectStartYear] = useState(2024)
  const [projectEndMonth, setProjectEndMonth] = useState(0)
  const [projectEndYear, setProjectEndYear] = useState(2024)
  const [monthTablePage, setMonthTablePage] = useState(0)

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

  const COLORS = [
    "#3B82F6", // Blue
    "#10B981", // Green
    "#F59E0B", // Amber
    "#8B5CF6", // Purple
    "#EC4899", // Pink
    "#06B6D4", // Cyan
    "#EF4444", // Red
    "#14B8A6", // Teal
  ]

  const toGlobalMonthIndex = (month: number, year: number) => {
    return (year - 2024) * 12 + month
  }

  const fromGlobalMonthIndex = (globalIndex: number) => {
    return {
      month: globalIndex % 12,
      year: 2024 + Math.floor(globalIndex / 12),
    }
  }

  const projectDurationMonths = (() => {
    const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear)
    const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear)
    return Math.max(1, endIdx - startIdx + 1)
  })()

  const getDisplayMonths = () => {
    const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear)
    const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear)
    const pageStart = startIdx + monthTablePage * 12
    const pageEnd = Math.min(pageStart + 12, endIdx + 1)

    const displayMonths = []
    for (let i = pageStart; i < pageEnd; i++) {
      const { month, year } = fromGlobalMonthIndex(i)
      displayMonths.push({
        month,
        year,
        displayName: `${MONTHS[month].slice(0, 3)} ${year.toString().slice(-2)}`,
        globalIndex: i,
      })
    }
    return displayMonths
  }

  const displayMonths = getDisplayMonths()
  const maxPages = Math.ceil(projectDurationMonths / 12)

  const handleCreateProject = () => {
    if (!newProjectName.trim()) return

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      name: newProjectName,
      color: selectedColor,
      startMonth: projectStartMonth,
      startYear: projectStartYear,
      endMonth: projectEndMonth,
      endYear: projectEndYear,
    }

    onAddProject(newProject)

    const newPositions: Position[] = []
    const startIdx = toGlobalMonthIndex(projectStartMonth, projectStartYear)
    const endIdx = toGlobalMonthIndex(projectEndMonth, projectEndYear)

    positionBudgets.forEach((positionBudget) => {
      displayMonths.forEach((displayMonth, displayIdx) => {
        const percentage = positionBudget.budgets[displayMonth.globalIndex] || 0
        if (percentage > 0) {
          newPositions.push({
            id: `pos-${newProject.id}-${positionBudget.id}-${displayMonth.globalIndex}`,
            projectId: newProject.id,
            monthIndex: displayMonth.globalIndex,
            percentage,
            allocated: 0,
            name: positionBudget.name,
          })
        }
      })
    })

    if (newPositions.length > 0) {
      onUpdatePositions([...positions, ...newPositions])
    }

    setNewProjectName("")
    setSelectedColor("#3B82F6")
    setPositionBudgets([])
    setProjectStartMonth(0)
    setProjectStartYear(2024)
    setProjectEndMonth(0)
    setProjectEndYear(2024)
    setMonthTablePage(0)
    setShowCreateModal(false)
  }

  const handleEditProject = (projectId: string) => {
    setEditingProjectId(projectId)
    const project = projects.find((p) => p.id === projectId)
    if (project) {
      setNewProjectName(project.name)
      setSelectedColor(project.color)
      setProjectStartMonth(project.startMonth ?? 0)
      setProjectStartYear(project.startYear ?? 2024)
      setProjectEndMonth(project.endMonth ?? 0)
      setProjectEndYear(project.endYear ?? 2024)
      setMonthTablePage(0)

      const projectPositions = positions.filter((p) => p.projectId === projectId)
      const positionMap = new Map<string, PositionBudget>()

      projectPositions.forEach((p) => {
        const name = p.name || "Unnamed Position"
        if (!positionMap.has(name)) {
          positionMap.set(name, {
            id: `${name}-${Date.now()}`,
            name,
            budgets: {},
          })
        }
        const pos = positionMap.get(name)!
        pos.budgets[p.monthIndex] = p.percentage
      })

      setPositionBudgets(Array.from(positionMap.values()))
    }
  }

  const handleSaveEditProject = () => {
    if (!editingProjectId || !newProjectName.trim()) return

    console.log("[v0] Saving project with dates:", {
      projectId: editingProjectId,
      startMonth: projectStartMonth,
      startYear: projectStartYear,
      endMonth: projectEndMonth,
      endYear: projectEndYear,
    })

    onUpdateProject(editingProjectId, {
      name: newProjectName,
      color: selectedColor,
      startMonth: projectStartMonth,
      startYear: projectStartYear,
      endMonth: projectEndMonth,
      endYear: projectEndYear,
    })

    const existingPositions = positions.filter((p) => p.projectId === editingProjectId)
    const newPositions: Position[] = []

    positionBudgets.forEach((positionBudget) => {
      displayMonths.forEach((displayMonth) => {
        const percentage = positionBudget.budgets[displayMonth.globalIndex] || 0
        if (percentage > 0) {
          const existingPos = existingPositions.find(
            (p) => p.monthIndex === displayMonth.globalIndex && p.name === positionBudget.name,
          )
          newPositions.push({
            id: `pos-${editingProjectId}-${positionBudget.id}-${displayMonth.globalIndex}`,
            projectId: editingProjectId,
            monthIndex: displayMonth.globalIndex,
            percentage,
            allocated: existingPos?.allocated || 0,
            name: positionBudget.name,
          })
        }
      })
    })

    const otherPositions = positions.filter((p) => p.projectId !== editingProjectId)
    onUpdatePositions([...otherPositions, ...newPositions])

    setEditingProjectId(null)
    setNewProjectName("")
    setSelectedColor("#3B82F6")
    setPositionBudgets([])
    setProjectStartMonth(0)
    setProjectStartYear(2024)
    setProjectEndMonth(0)
    setProjectEndYear(2024)
    setMonthTablePage(0)
  }

  const handleAddPositionLine = () => {
    setPositionBudgets([
      ...positionBudgets,
      {
        id: `pos-${Date.now()}`,
        name: "New Position",
        budgets: {},
      },
    ])
  }

  const handleDeletePositionLine = (id: string) => {
    setPositionBudgets(positionBudgets.filter((p) => p.id !== id))
  }

  const handleUpdatePositionName = (id: string, name: string) => {
    setPositionBudgets(positionBudgets.map((p) => (p.id === id ? { ...p, name } : p)))
  }

  const handleUpdatePositionBudget = (id: string, globalMonthIndex: number, value: number) => {
    setPositionBudgets(
      positionBudgets.map((p) => (p.id === id ? { ...p, budgets: { ...p.budgets, [globalMonthIndex]: value } } : p)),
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center gap-3 px-4 py-2 rounded bg-muted border border-border">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: project.color }} />
            <span className="text-sm font-medium text-foreground">{project.name}</span>
            <button
              onClick={() => handleEditProject(project.id)}
              className="ml-2 px-2 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            >
              Edit
            </button>
          </div>
        ))}
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors text-sm"
        >
          + New Project
        </button>
      </div>

      {(showCreateModal || editingProjectId) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg border border-border shadow-lg max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              {editingProjectId ? "Edit Project" : "Create New Project"}
            </h2>

            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Project Name</label>
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                  placeholder="Enter project name"
                  autoFocus
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Project Color</label>
                <div className="flex gap-2 flex-wrap">
                  {COLORS.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded transition-all ${selectedColor === color ? "ring-2 ring-offset-2 ring-primary" : "hover:opacity-80"}`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Start Month</label>
                <select
                  value={projectStartMonth}
                  onChange={(e) => setProjectStartMonth(Number(e.target.value))}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                >
                  {MONTHS.map((month, idx) => (
                    <option key={idx} value={idx}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">Start Year</label>
                <select
                  value={projectStartYear}
                  onChange={(e) => setProjectStartYear(Number(e.target.value))}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                >
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">End Month</label>
                <select
                  value={projectEndMonth}
                  onChange={(e) => setProjectEndMonth(Number(e.target.value))}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                >
                  {MONTHS.map((month, idx) => (
                    <option key={idx} value={idx}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">End Year</label>
                <select
                  value={projectEndYear}
                  onChange={(e) => setProjectEndYear(Number(e.target.value))}
                  className="border border-border rounded px-3 py-2 w-full text-sm bg-background text-foreground"
                >
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-medium text-muted-foreground">
                  Positions by Month (%) - Page {monthTablePage + 1} of {maxPages}
                </label>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setMonthTablePage(Math.max(0, monthTablePage - 1))}
                    disabled={monthTablePage === 0}
                    className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Prev 12
                  </button>
                  <button
                    onClick={() => setMonthTablePage(Math.min(maxPages - 1, monthTablePage + 1))}
                    disabled={monthTablePage >= maxPages - 1}
                    className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next 12 →
                  </button>
                  <button
                    onClick={handleAddPositionLine}
                    className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                  >
                    + Add Position
                  </button>
                </div>
              </div>
              <div className="border border-border rounded overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-muted-foreground min-w-32">
                        Position Name
                      </th>
                      {displayMonths.map((displayMonth) => (
                        <th
                          key={displayMonth.globalIndex}
                          className="px-4 py-2 text-center font-semibold text-muted-foreground min-w-20"
                        >
                          {displayMonth.displayName}
                        </th>
                      ))}
                      <th className="px-4 py-2 text-center font-semibold text-muted-foreground w-10">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {positionBudgets.length === 0 ? (
                      <tr>
                        <td colSpan={displayMonths.length + 2} className="px-4 py-8 text-center text-muted-foreground">
                          No positions yet. Click "Add Position" to create one.
                        </td>
                      </tr>
                    ) : (
                      positionBudgets.map((positionBudget) => (
                        <tr key={positionBudget.id} className="border-t border-border hover:bg-muted/50">
                          <td className="px-4 py-2 border-r border-border">
                            <input
                              type="text"
                              value={positionBudget.name}
                              onChange={(e) => handleUpdatePositionName(positionBudget.id, e.target.value)}
                              className="w-full px-2 py-1 border border-border rounded text-foreground bg-card"
                              placeholder="e.g., Senior Developer"
                            />
                          </td>
                          {displayMonths.map((displayMonth) => (
                            <td
                              key={displayMonth.globalIndex}
                              className="px-4 py-2 border-r border-border last:border-r-0 bg-background"
                            >
                              <input
                                type="number"
                                min="0"
                                max="999"
                                value={positionBudget.budgets[displayMonth.globalIndex] || ""}
                                onChange={(e) =>
                                  handleUpdatePositionBudget(
                                    positionBudget.id,
                                    displayMonth.globalIndex,
                                    e.target.value ? Number(e.target.value) : 0,
                                  )
                                }
                                className="w-full px-2 py-1 text-center border border-border rounded text-foreground bg-card"
                                placeholder="0"
                              />
                            </td>
                          ))}
                          <td className="px-4 py-2 text-center">
                            <button
                              onClick={() => handleDeletePositionLine(positionBudget.id)}
                              className="px-2 py-1 text-xs bg-destructive text-destructive-foreground rounded hover:bg-destructive/90 transition-colors"
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setShowCreateModal(false)
                  setEditingProjectId(null)
                  setNewProjectName("")
                  setSelectedColor("#3B82F6")
                  setPositionBudgets([])
                  setProjectStartMonth(0)
                  setProjectStartYear(2024)
                  setProjectEndMonth(0)
                  setProjectEndYear(2024)
                  setMonthTablePage(0)
                }}
                className="px-4 py-2 bg-muted text-muted-foreground rounded font-medium hover:bg-muted/80 transition-colors text-sm"
              >
                Cancel
              </button>
              {editingProjectId && (
                <button
                  onClick={() => {
                    if (
                      window.confirm("Are you sure you want to delete this project? All positions will be removed.")
                    ) {
                      onDeleteProject(editingProjectId)
                      setEditingProjectId(null)
                      setNewProjectName("")
                      setSelectedColor("#3B82F6")
                      setPositionBudgets([])
                      setProjectStartMonth(0)
                      setProjectStartYear(2024)
                      setProjectEndMonth(0)
                      setProjectEndYear(2024)
                      setMonthTablePage(0)
                    }
                  }}
                  className="px-4 py-2 bg-destructive text-destructive-foreground rounded font-medium hover:bg-destructive/90 transition-colors text-sm"
                >
                  Delete Project
                </button>
              )}
              <button
                onClick={editingProjectId ? handleSaveEditProject : handleCreateProject}
                className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                {editingProjectId ? "Save Changes" : "Create Project"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
