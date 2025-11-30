// Azure Cosmos DB Table API storage utilities for SolaFire
import { azureStorage, SystemUser } from './azure'

// Re-export SystemUser type for convenience
export type { SystemUser } from './azure'

export interface GlobalData {
  projects: any[]
  users: any[]
  allocations: any[]
  positions: any[]
  entities: any[]
  startMonth?: number
  startYear?: number
}

// Azure Cosmos DB storage functions
export async function getGlobalData(): Promise<GlobalData> {
  console.log("[Storage] getGlobalData called")
  try {
    console.log("[Storage] Trying Azure...")
    const result = await azureStorage.getGlobalData()
    console.log("[Storage] Azure succeeded:", result)
    return result
  } catch (error) {
    console.warn("[Storage] Azure failed, using localStorage fallback:", error)
    try {
      const data = localStorage.getItem('sola-global-data')
      console.log("[Storage] localStorage data found:", !!data)
      const parsedData = data ? JSON.parse(data) : { projects: [], users: [], allocations: [], positions: [], entities: [], startMonth: 0, startYear: 2024 }
      console.log("[Storage] Returning localStorage data:", parsedData)
      return parsedData
    } catch (localStorageError) {
      console.error("[Storage] localStorage fallback also failed:", localStorageError)
      return { projects: [], users: [], allocations: [], positions: [], entities: [], startMonth: 0, startYear: 2024 }
    }
  }
}

export async function setGlobalData(data: Partial<GlobalData>): Promise<void> {
  try {
    await azureStorage.setGlobalData(data)
  } catch (error) {
    console.warn("Azure failed, using localStorage fallback:", error)
    const storedData = localStorage.getItem('sola-global-data')
    const currentData = storedData ? JSON.parse(storedData) : { projects: [], users: [], allocations: [], positions: [], entities: [], startMonth: 0, startYear: 2024 }
    const updatedData = { ...currentData, ...data }
    localStorage.setItem('sola-global-data', JSON.stringify(updatedData))
  }
}

export async function clearGlobalData(): Promise<void> {
  try {
    await azureStorage.clearGlobalData()
  } catch (error) {
    console.warn("Azure failed, using localStorage fallback:", error)
    localStorage.removeItem('sola-global-data')
  }
}

// Convenience functions that work with the global data
export async function getCurrentUserData(): Promise<GlobalData> {
  return await getGlobalData()
}

export async function setCurrentUserData(data: Partial<GlobalData>): Promise<void> {
  await setGlobalData(data)
}

// System users (now using Azure)
export async function getSystemUsers(): Promise<SystemUser[]> {
  console.log("[Storage] getSystemUsers called - START")
  try {
    console.log("[Storage] Trying Azure for system users...")
    const result = await azureStorage.getSystemUsers()
    console.log("[Storage] Azure system users succeeded:", result)
    return result
  } catch (error) {
    console.warn("[Storage] Azure system users failed, using localStorage fallback:", error)
    // Fallback to localStorage
    try {
      const users = localStorage.getItem('sola-system-users')
      console.log("[Storage] localStorage system users found:", !!users)
      const parsedUsers = users ? JSON.parse(users) : []
      console.log("[Storage] Returning localStorage system users:", parsedUsers)
      return parsedUsers
    } catch (localStorageError) {
      console.error("[Storage] localStorage system users fallback failed:", localStorageError)
      return []
    }
  }
}

export async function setSystemUsers(users: SystemUser[]): Promise<void> {
  try {
    await azureStorage.setSystemUsers(users)
  } catch (error) {
    console.warn("Azure failed, using localStorage fallback:", error)
    localStorage.setItem('sola-system-users', JSON.stringify(users))
  }
}

export async function addSystemUser(user: Omit<SystemUser, 'id' | 'createdAt'>): Promise<SystemUser> {
  try {
    return await azureStorage.addSystemUser(user)
  } catch (error) {
    console.warn("Azure failed, using localStorage fallback:", error)
    const users = await getSystemUsers()
    const newUser: SystemUser = {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    users.push(newUser)
    await setSystemUsers(users)
    return newUser
  }
}

export async function updateSystemUser(id: string, updates: Partial<SystemUser>): Promise<void> {
  try {
    await azureStorage.updateSystemUser(id, updates)
  } catch (error) {
    console.warn("Azure failed, using localStorage fallback:", error)
    const users = await getSystemUsers()
    const index = users.findIndex(u => u.id === id)
    if (index !== -1) {
      users[index] = { ...users[index], ...updates }
      await setSystemUsers(users)
    }
  }
}

export async function deleteSystemUser(id: string): Promise<void> {
  try {
    await azureStorage.deleteSystemUser(id)
  } catch (error) {
    console.warn("Azure failed, using localStorage fallback:", error)
    const users = await getSystemUsers()
    const filteredUsers = users.filter(u => u.id !== id)
    await setSystemUsers(filteredUsers)
  }
}

export async function authenticateUser(email: string, password: string): Promise<SystemUser | null> {
  try {
    return await azureStorage.authenticateUser(email, password)
  } catch (error) {
    console.warn("Azure failed, using localStorage fallback:", error)
    const users = await getSystemUsers()
    console.log("Users found for authentication:", users)
    const foundUser = users.find(u => u.email === email && u.password === password) || null
    console.log("Authentication result:", foundUser)
    return foundUser
  }
}

// Current user session (still use localStorage for session management)
const STORAGE_KEYS = {
  CURRENT_USER: "sola-current-user",
} as const

export function getCurrentUser(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(STORAGE_KEYS.CURRENT_USER)
}

export function getCurrentSystemUser(): Promise<SystemUser | null> {
  const email = getCurrentUser()
  if (!email) return Promise.resolve(null)
  return getSystemUsers().then(users => users.find(u => u.email === email) || null)
}

export function setCurrentUser(email: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, email)
}

export function clearCurrentUser(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER)
}

// Azure data change subscription (polling-based)
export function onGlobalDataChange(callback: (data: GlobalData) => void) {
  return azureStorage.onDataChange(callback)
}

// Initialize Azure table
export async function initializeAzureStorage() {
  try {
    return await azureStorage.initializeTable()
  } catch (error) {
    console.warn("Azure table initialization failed, using localStorage fallback:", error)
    // Don't throw - just continue with localStorage
    return Promise.resolve()
  }
}
