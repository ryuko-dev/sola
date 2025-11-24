"use client"

import type { Project, Allocation } from "@/lib/types"

interface UnallocatedPositionsProps {
  projects: Project[]
  allocations: Allocation[]
  selectedMonth: number | null
  displayMonths: Array<{ month: number; year: number; globalIndex: number; display: string }>
}

export function UnallocatedPositions({
  projects,
  allocations,
  selectedMonth,
  displayMonths,
}: UnallocatedPositionsProps) {
  if (selectedMonth === null) {
    return (
      <div className="border-border rounded-lg p-4 bg-muted/20 min-w-64 border-4">
        <p className="text-sm text-muted-foreground">Select a month to see unallocated positions</p>
      </div>
    )
  }

  const unallocatedPositions = projects.flatMap((project) => {
    // Get all positions for this project that match the selected month
    const positionsForMonth =
      projects.find((p) => p.id === project.id)?.positions?.filter((pos) => pos.monthIndex === selectedMonth) || []

    return positionsForMonth
      .map((position) => {
        const allocated = allocations
          .filter((a) => a.projectId === project.id && a.monthIndex === selectedMonth && a.positionId === position.id)
          .reduce((sum, a) => sum + a.percentage, 0)

        const unallocated = Math.max(0, position.percentage - allocated)
        if (unallocated <= 0) return null

        return {
          projectId: project.id,
          projectName: project.name,
          projectColor: project.color,
          positionId: position.id,
          positionName: position.name || "Position",
          percentage: unallocated,
        }
      })
      .filter(Boolean)
  })

  if (unallocatedPositions.length === 0) {
    return (
      <div className="border border-border rounded-lg p-4 bg-muted/20 min-w-64">
        <p className="text-sm text-muted-foreground">No unallocated positions for this month</p>
      </div>
    )
  }

  return (
    <div className="border border-border rounded-lg p-4 bg-muted/20 min-w-64 space-y-2">
      <h3 className="font-semibold text-sm mb-3">Unallocated Positions</h3>
      {unallocatedPositions.map((pos) => (
        <div
          key={`${pos.projectId}-${pos.positionId}`}
          draggable
          onDragStart={(e) => {
            if (!e.dataTransfer) return
            e.dataTransfer.effectAllowed = "move"
            e.dataTransfer.setData(
              "positionData",
              JSON.stringify({
                projectId: pos.projectId,
                positionName: pos.positionName,
                percentage: pos.percentage,
              }),
            )
          }}
          className="p-3 rounded border border-border cursor-move hover:shadow-md transition-shadow"
          style={{
            backgroundColor: pos.projectColor,
            opacity: 0.9,
          }}
        >
          <div className="text-sm font-medium text-white truncate">{pos.projectName}</div>
          <div className="text-xs text-white/90 truncate">{pos.positionName}</div>
          <div className="text-xs text-white/80 font-semibold mt-1">{pos.percentage}%</div>
        </div>
      ))}
    </div>
  )
}
