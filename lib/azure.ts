// Azure Cosmos DB Table API for SolaFire
import { TableClient, TableServiceClient, AzureSASCredential, odata } from "@azure/data-tables"

// Azure configuration
const azureConfig = {
  accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME || "sola1",
  accountKey: process.env.AZURE_STORAGE_ACCOUNT_KEY || "",
  tableName: process.env.AZURE_TABLE_NAME || "soladata"
}

// Create TableServiceClient
const tableService = new TableServiceClient(
  `https://${azureConfig.accountName}.table.core.windows.net`,
  new AzureSASCredential(azureConfig.accountKey)
)

// Create TableClient for our data
const tableClient = new TableClient(
  `https://${azureConfig.accountName}.table.core.windows.net`,
  azureConfig.tableName,
  new AzureSASCredential(azureConfig.accountKey)
)

// System user interface
export interface SystemUser {
  id: string
  email: string
  name: string
  password: string
  role: 'admin' | 'editor' | 'viewer' | 'senior'
  isActive: boolean
  createdAt: string
}

// Global data interface
export interface GlobalData {
  projects: any[]
  users: any[]
  allocations: any[]
  positions: any[]
  entities: any[]
  startMonth?: number
  startYear?: number
  systemUsers?: SystemUser[]
}

// Azure Table Entity interface
interface TableEntity {
  partitionKey: string
  rowKey: string
  data?: string
  timestamp?: Date
  etag?: string
}

export class AzureStorage {
  private static instance: AzureStorage
  
  static getInstance(): AzureStorage {
    if (!AzureStorage.instance) {
      AzureStorage.instance = new AzureStorage()
    }
    return AzureStorage.instance
  }

  // Initialize table
  async initializeTable(): Promise<void> {
    try {
      await tableService.createTable(azureConfig.tableName)
      console.log('[Azure] Table created successfully')
    } catch (error: any) {
      if (error.statusCode === 409) {
        console.log('[Azure] Table already exists')
      } else {
        console.error('[Azure] Error creating table:', error)
        throw error
      }
    }
  }

  // Get global data from Azure Table
  async getGlobalData(): Promise<GlobalData> {
    try {
      const entities = tableClient.listEntities<TableEntity>({
        queryOptions: { filter: `partitionKey eq 'globaldata'` }
      })

      const result: GlobalData = {
        projects: [],
        users: [],
        allocations: [],
        positions: [],
        entities: [],
        startMonth: 0,
        startYear: 2024
      }

      for await (const entity of entities) {
        if (entity.data) {
          try {
            const parsedData = JSON.parse(entity.data)
            Object.assign(result, parsedData)
          } catch (parseError) {
            console.error('[Azure] Error parsing entity data:', parseError)
          }
        }
      }

      console.log('[Azure] Loading global data:', result)
      return result
    } catch (error) {
      console.error('[Azure] Error loading global data:', error)
      // Re-throw to trigger localStorage fallback in storage.ts
      throw error
    }
  }

  // Set global data to Azure Table
  async setGlobalData(data: Partial<GlobalData>): Promise<void> {
    try {
      const existing = await this.getGlobalData()
      const updated = { ...existing, ...data }
      
      console.log('[Azure] Saving to global storage:', updated)

      // Store as JSON string in table entity
      const entity: TableEntity = {
        partitionKey: 'globaldata',
        rowKey: 'main',
        data: JSON.stringify(updated),
        timestamp: new Date()
      }

      await tableClient.upsertEntity(entity, "Replace")
      console.log('[Azure] Data saved successfully')
    } catch (error) {
      console.error('[Azure] Error saving global data:', error)
      throw error
    }
  }

  // Listen for real-time changes (polling approach for Table API)
  onDataChange(callback: (data: GlobalData) => void): () => void {
    let lastETag: string | undefined
    
    const poll = async () => {
      try {
        const entities = tableClient.listEntities<TableEntity>({
          queryOptions: { filter: `partitionKey eq 'globaldata' and rowKey eq 'main'` }
        })

        for await (const entity of entities) {
          if (entity.etag && entity.etag !== lastETag) {
            lastETag = entity.etag
            if (entity.data) {
              const data = JSON.parse(entity.data)
              callback(data)
            }
          }
        }
      } catch (error) {
        console.error('[Azure] Polling error:', error)
      }
    }

    const interval = setInterval(poll, 2000) // Poll every 2 seconds
    
    return () => clearInterval(interval)
  }

  // Clear all data
  async clearGlobalData(): Promise<void> {
    try {
      await tableClient.deleteEntity('globaldata', 'main')
      console.log('[Azure] Data cleared successfully')
    } catch (error) {
      console.error('[Azure] Error clearing data:', error)
    }
  }

  // System Users management
  async getSystemUsers(): Promise<SystemUser[]> {
    console.log("[Azure] getSystemUsers called")
    try {
      const data = await this.getGlobalData()
      console.log("[Azure] getGlobalData succeeded, data:", data)
      const users = data.systemUsers || []
      console.log("[Azure] Returning users:", users.length)
      return users
    } catch (error) {
      console.error('[Azure] Error getting system users:', error)
      // Re-throw to trigger localStorage fallback in storage.ts
      throw error
    }
  }

  async setSystemUsers(users: SystemUser[]): Promise<void> {
    try {
      await this.setGlobalData({ systemUsers: users })
      console.log('[Azure] System users saved successfully')
    } catch (error) {
      console.error('[Azure] Error saving system users:', error)
      throw error
    }
  }

  async addSystemUser(user: Omit<SystemUser, 'id' | 'createdAt'>): Promise<SystemUser> {
    const users = await this.getSystemUsers()
    const newUser: SystemUser = {
      ...user,
      id: `system-user-${Date.now()}`,
      createdAt: new Date().toISOString(),
    }
    await this.setSystemUsers([...users, newUser])
    return newUser
  }

  async updateSystemUser(id: string, updates: Partial<SystemUser>): Promise<void> {
    const users = await this.getSystemUsers()
    const updated = users.map(u => u.id === id ? { ...u, ...updates } : u)
    await this.setSystemUsers(updated)
  }

  async deleteSystemUser(id: string): Promise<void> {
    const users = await this.getSystemUsers()
    await this.setSystemUsers(users.filter(u => u.id !== id))
  }

  async authenticateUser(email: string, password: string): Promise<SystemUser | null> {
    console.log("[Azure] authenticateUser called with:", email)
    try {
      const users = await this.getSystemUsers()
      console.log("[Azure] Got users:", users.length)
      return users.find(u => u.email === email && u.password === password && u.isActive) || null
    } catch (error) {
      console.warn("[Azure] Error in authenticateUser, falling back:", error)
      // Re-throw to trigger localStorage fallback in storage.ts
      throw error
    }
  }
}

// Export singleton instance
export const azureStorage = AzureStorage.getInstance()

// Export for direct access if needed
export { tableClient, tableService }
