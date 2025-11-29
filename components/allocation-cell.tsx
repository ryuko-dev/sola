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
  users?: any[]
  month?: any
  userEnded?: boolean
  userNotStarted?: boolean
  viewMode?: 'percentage' | 'days'
  getDaysFromPercentage?: (userId: string, monthIndex: number, percentage: number) => number
  readOnly?: boolean
  selectedProjectId?: string | null
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
  users = [],
  userEnded = false,
  userNotStarted = false,
  viewMode = 'percentage',
  getDaysFromPercentage,
  readOnly = false,
  selectedProjectId,
}: AllocationCellProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState(0)

  // Filter allocations by selected project if a filter is active
  const filteredAllocations = selectedProjectId 
    ? allocations.filter(allocation => allocation.projectId === selectedProjectId)
    : allocations

  // Helper to convert percentage to days based on user work pattern
  const getDaysFromPercentageLocal = (userId: string, monthIndex: number, percentage: number): number => {
    if (getDaysFromPercentage) {
      return getDaysFromPercentage(userId, monthIndex, percentage)
    }
    // Fallback calculation if function not provided
    const year = Math.floor(monthIndex / 12) + 2024
    const month = monthIndex % 12
    
    // Default to mon-fri for now
    const workPattern = 'mon-fri'
    const startDay = workPattern === 'mon-fri' ? 1 : 0
    
    // Calculate working days in month
    const date = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    let workingDays = 0
    
    for (let day = 1; day <= daysInMonth; day++) {
      date.setDate(day)
      const dayOfWeek = date.getDay()
      
      if (startDay === 1) {
        if (dayOfWeek >= 1 && dayOfWeek <= 5) workingDays++
      } else {
        if (dayOfWeek >= 0 && dayOfWeek <= 4) workingDays++
      }
    }
    
    return Math.round((percentage / 100) * workingDays)
  }

  // Calculate total allocated percentage for this cell
  const totalAllocated = filteredAllocations.reduce((sum, a) => sum + (a.percentage || 0), 0)
  const freePercentage = Math.max(0, 100 - totalAllocated)

  // Determine border class based on allocation level
  const allocationBorderClass =
    totalAllocated === 100
      ? "border-2 border-green-500"
      : totalAllocated > 100
      ? "border-2 border-red-500"
      : ""

  const handleClick = () => {
    if (freePercentage > 0 && onEmptyCellClick && !userNotStarted) {
      onEmptyCellClick()
    }
  }

  return (
    <td
      data-user-id={userId}
      data-month={monthIndex}
      className={`w-32 border-r border-b border-border bg-background px-1 py-0.5 min-h-8 transition-colors relative ${
        userEnded || userNotStarted || readOnly
          ? "cursor-not-allowed bg-gray-50"
          : freePercentage > 0 && onEmptyCellClick
          ? "cursor-pointer hover:bg-muted/50"
          : "hover:bg-muted/30"
      }`}
      onMouseEnter={() => !userEnded && !userNotStarted && !readOnly && freePercentage > 0 && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={userEnded || userNotStarted || readOnly ? undefined : handleClick}
    >
      <div className="flex flex-col h-full gap-0.5">
        {/* Allocation bars row */}
        <div className="flex items-center flex-1">
          <div className={`flex w-full h-4 rounded overflow-hidden bg-gray-100 ${allocationBorderClass}`}>
            {userEnded ? (
              <div className="w-full h-full flex items-center justify-center text-[8px] font-semibold text-gray-500 bg-gray-200">
                ended
              </div>
            ) : userNotStarted ? (
              <div className="w-full h-full flex items-center justify-center text-[8px] font-semibold text-gray-500 bg-gray-200">
                not started
              </div>
            ) : (
              filteredAllocations.map((allocation) => {
              const project = projects.find((p) => p.id === allocation.projectId)
              console.log("[v0] AllocationCell rendering bar:", {
                allocationId: allocation.id,
                projectId: allocation.projectId,
                projectColor: project?.color,
              })
                // Keep total bar size constant: if allocations exceed 100%,
                // normalize segments so they still fit into a 100% width bar.
                const capacity = totalAllocated > 100 ? totalAllocated : 100
                const width = Math.max(
                  0,
                  Math.min(100, ((allocation.percentage || 0) / capacity) * 100),
                )

                // Calculate display value based on view mode
                const displayValue = viewMode === 'days' 
                  ? Math.round(getDaysFromPercentageLocal(userId, monthIndex, allocation.percentage || 0))
                  : Math.round(allocation.percentage || 0)

                const displayText = viewMode === 'days' 
                  ? `${displayValue} days`
                  : `${displayValue}%`

                // Calculate days for tooltip (always show days)
                const daysValue = getDaysFromPercentageLocal(userId, monthIndex, allocation.percentage || 0)

                return (
                  <div
                    key={allocation.id}
                    className={`h-full text-[8px] flex items-center justify-center font-semibold relative ${
                      readOnly ? "" : "group cursor-pointer"
                    } text-white`}
                    style={{
                      backgroundColor: project?.color || "#999",
                      width: `${width}%`,
                      minWidth: width > 0 ? "8%" : undefined,
                    }}
                    onClick={(e) => {
                      if (readOnly) return
                      e.stopPropagation()
                      onEdit?.(allocation.id)
                    }}
                    title={`${project?.name ?? "Project"} - ${allocation.positionName || allocation.name || "Position"} (${displayText})`}
                  >
                    {displayText}
                    {!readOnly && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onRemove?.(allocation.id)
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    )}
                  </div>
                )
              })
            )}
          </div>
          {/* Green tick for 90-100% allocation */}
          {!userEnded && !userNotStarted && totalAllocated >= 90 && totalAllocated <= 100 && filteredAllocations.length > 0 && (
            <div className="ml-1 flex-shrink-0">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        
        {!userEnded && !userNotStarted && !readOnly && isHovering && freePercentage > 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 rounded text-[9px] text-primary font-medium pointer-events-none">
            Click to select position
          </div>
        )}
      </div>
    </td>
  )
}
