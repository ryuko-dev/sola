export interface Project {
  id: string
  name: string
  color: string
  positions?: Position[]
  startMonth?: number
  startYear?: number
  endMonth?: number
  endYear?: number
}

export interface Position {
  id: string
  projectId: string
  monthIndex: number
  percentage: number
  allocated: number
  name?: string
}

export interface User {
  id: string
  name: string
  department: string
}

export interface Allocation {
  id: string
  userId: string
  projectId: string
  monthIndex: number
  percentage: number
  positionId?: string
  positionName?: string
}
