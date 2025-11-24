"use client"
import { useState } from "react"

interface AllocationCellProps {
  userId: string
  monthIndex: number
  allocations?: any[]
  onEdit?: (id: string) => void
  onSaveEdit?: (id: string, percentage: number) => void
  onRemove?: (id: string) => void
  onEmptyCellClick?: () => void
  project?: any
  projects?: any[]
  month?: any
}

export function AllocationCell({
  userId,
  monthIndex,
  allocations = [],
  onEdit,
  onSaveEdit,
  onRemove,
  onEmptyCellClick,
  projects = [],
}: AllocationCellProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState(0)

  const totalAllocated = allocations.reduce((sum, a) => sum + (a.percentage || 0), 0)
  const freePercentage = 100 - totalAllocated

  const handleClick = () => {
    if (freePercentage > 0 && onEmptyCellClick) {
      onEmptyCellClick()
    }
  }

  return (
    <td
      data-user-id={userId}
      data-month={monthIndex}
      className={`w-32 border-r border-b border-border bg-background p-2 min-h-16 transition-colors relative ${
        freePercentage > 0 && onEmptyCellClick ? "cursor-pointer hover:bg-muted/50" : "hover:bg-muted/30"
      }`}
      onMouseEnter={() => freePercentage > 0 && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <div className="flex flex-col h-full gap-1">
        <div className="flex flex-wrap gap-0.5 items-start flex-1">
          {allocations.map((allocation) => {
            const project = projects.find((p) => p.id === allocation.projectId)
            return (
              <div key={allocation.id} className="flex flex-col gap-1 flex-1 min-w-12">
                <div
                  className="h-5 rounded text-white text-xs flex items-center justify-center font-semibold relative group cursor-pointer"
                  style={{ backgroundColor: project?.color || "#999" }}
                  onClick={(e) => {
                    e.stopPropagation()
                    onEdit?.(allocation.id)
                  }}
                  title={`${project?.name} - ${allocation.percentage}%`}
                >
                  {allocation.percentage}%
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onRemove?.(allocation.id)
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {freePercentage > 0 && (
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <div className="flex-1 border-2 border-dashed border-gray-300 rounded min-h-5" />
            <span className="whitespace-nowrap text-right">{freePercentage}% free</span>
          </div>
        )}

        {isHovering && freePercentage > 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 rounded text-xs text-primary font-medium pointer-events-none">
            Click to select position
          </div>
        )}
      </div>
    </td>
  )
}
