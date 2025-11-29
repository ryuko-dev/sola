"use client"

import React, { useState } from "react"
import { Button } from "./ui/button"
import { getSystemUsers, addSystemUser, updateSystemUser, deleteSystemUser, getCurrentUserData, setCurrentUserData, getCurrentUser, type SystemUser } from "../lib/storage"
import type { Entity } from "../lib/types"

interface UserManagementProps {
  isOpen: boolean
  onClose: () => void
}

export function UserManagement({ isOpen, onClose }: UserManagementProps) {
  const [users, setUsers] = useState<SystemUser[]>(getSystemUsers())
  const [newUser, setNewUser] = useState({ 
    email: "", 
    name: "", 
    password: "",
    role: "editor" as 'admin' | 'editor' | 'viewer' 
  })
  const [isAdding, setIsAdding] = useState(false)
  const [editingUser, setEditingUser] = useState<SystemUser | null>(null)
  const [editForm, setEditForm] = useState({
    email: "",
    name: "",
    password: "",
    role: "editor" as 'admin' | 'editor' | 'viewer'
  })

  // Entity management state
  const [entities, setEntities] = useState<Entity[]>(() => {
    if (typeof window !== 'undefined') {
      const userData = getCurrentUserData()
      return userData.entities || []
    }
    return []
  })
  const [newEntityName, setNewEntityName] = useState("")
  const [newEntityCurrencyCode, setNewEntityCurrencyCode] = useState("")
  const [newEntityTaxAccount, setNewEntityTaxAccount] = useState("")
  const [newEntitySSAccount, setNewEntitySSAccount] = useState("")
  const [showEntitySection, setShowEntitySection] = useState(false)

  // Backup management state
  const [showBackupSection, setShowBackupSection] = useState(false)

  // User management section state
  const [showUserSection, setShowUserSection] = useState(true)

  // Save entities to localStorage whenever they change
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUserData({ entities })
    }
  }, [entities])

  const refreshUsers = () => {
    const allUsers = getSystemUsers()
    console.log("All users in system:", allUsers)
    setUsers(allUsers)
  }

  const handleAddUser = () => {
    if (!newUser.email || !newUser.name || !newUser.password) return
    
    console.log("Adding user:", newUser)
    const addedUser = addSystemUser({
      email: newUser.email,
      name: newUser.name,
      password: newUser.password,
      role: newUser.role,
      isActive: true,
    })
    console.log("User added successfully:", addedUser)
    
    setNewUser({ email: "", name: "", password: "", role: "editor" })
    setIsAdding(false)
    refreshUsers()
  }

  const handleEditUser = (user: SystemUser) => {
    setEditingUser(user)
    setEditForm({
      email: user.email,
      name: user.name,
      password: user.password,
      role: user.role
    })
  }

  const handleSaveEdit = () => {
    if (!editingUser || !editForm.email || !editForm.name) return
    
    updateSystemUser(editingUser.id, {
      email: editForm.email,
      name: editForm.name,
      password: editForm.password || editingUser.password,
      role: editForm.role
    })
    
    setEditingUser(null)
    setEditForm({ email: "", name: "", password: "", role: "editor" })
    refreshUsers()
  }

  const handleCancelEdit = () => {
    setEditingUser(null)
    setEditForm({ email: "", name: "", password: "", role: "editor" })
  }

  const handleToggleActive = (userId: string, isActive: boolean) => {
    updateSystemUser(userId, { isActive })
    refreshUsers()
  }

  const handleDeleteUser = (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      deleteSystemUser(userId)
      refreshUsers()
    }
  }

  // Entity management functions
  const handleAddEntity = () => {
    if (!newEntityName.trim() || !newEntityCurrencyCode.trim()) return
    
    const newEntity: Entity = {
      id: `entity-${Date.now()}`,
      name: newEntityName.trim(),
      currencyCode: newEntityCurrencyCode.trim(),
      taxAccount: newEntityTaxAccount.trim(),
      ssAccount: newEntitySSAccount.trim()
    }
    
    setEntities(prev => [...prev, newEntity])
    setNewEntityName("")
    setNewEntityCurrencyCode("")
    setNewEntityTaxAccount("")
    setNewEntitySSAccount("")
  }

  const handleDeleteEntity = (entityId: string) => {
    if (confirm("Are you sure you want to delete this entity?")) {
      setEntities(prev => prev.filter(e => e.id !== entityId))
    }
  }

  // Backup management functions
  const handleCreateBackup = () => {
    if (typeof window === 'undefined') return
    
    // Get all current user data
    const currentUser = getCurrentUser()
    if (!currentUser) return
    
    const userData = getCurrentUserData()
    
    // Create backup object with timestamp
    const backup = {
      timestamp: new Date().toISOString(),
      version: "1.0",
      data: {
        projects: userData.projects || [],
        users: userData.users || [],
        allocations: userData.allocations || [],
        positions: userData.positions || [],
        entities: userData.entities || [],
        startMonth: userData.startMonth,
        startYear: userData.startYear,
        systemUsers: userData.systemUsers || []
      }
    }
    
    // Convert to JSON and create downloadable file
    const backupJson = JSON.stringify(backup, null, 2)
    const blob = new Blob([backupJson], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    // Create download link
    const link = document.createElement('a')
    link.href = url
    link.download = `sola-backup-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    alert('Backup created successfully!')
  }

  const handleImportBackup = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const backupText = e.target?.result as string
        const backup = JSON.parse(backupText)
        
        // Validate backup structure
        if (!backup.data || typeof backup.data !== 'object') {
          throw new Error('Invalid backup file structure')
        }
        
        if (confirm('This will overwrite all current data. Are you sure you want to continue?')) {
          // Import all data
          const dataToImport = backup.data
          
          // Update user data
          setCurrentUserData({
            projects: dataToImport.projects || [],
            users: dataToImport.users || [],
            allocations: dataToImport.allocations || [],
            positions: dataToImport.positions || [],
            entities: dataToImport.entities || [],
            startMonth: dataToImport.startMonth,
            startYear: dataToImport.startYear,
            systemUsers: dataToImport.systemUsers || []
          })
          
          // Update local state
          setEntities(dataToImport.entities || [])
          refreshUsers()
          
          alert('Backup imported successfully! Please refresh the page to see all changes.')
        }
      } catch (error) {
        alert('Error importing backup: ' + (error as Error).message)
      }
    }
    
    reader.readAsText(file)
    // Reset file input
    event.target.value = ''
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Settings</h3>
          <Button onClick={onClose} variant="outline" size="sm">
            ×
          </Button>
        </div>

        {/* User Management Section */}
        <div className="border-b pb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-gray-700">User Management</h4>
            <Button
              onClick={() => setShowUserSection(!showUserSection)}
              variant="outline"
              size="sm"
            >
              {showUserSection ? 'Hide' : 'Show'}
            </Button>
          </div>
          
          {showUserSection && (
            <div className="space-y-4">
              {/* Edit User Form */}
              {editingUser && (
                <div className="p-4 border rounded-lg bg-blue-50 space-y-3">
                  <h4 className="font-medium text-sm">Edit User: {editingUser.name}</h4>
                  <input
                    type="email"
                    placeholder="Email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                  <input
                    type="password"
                    placeholder="Password (leave empty to keep current)"
                    value={editForm.password}
                    onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                  <select
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value as 'admin' | 'editor' | 'viewer' })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  >
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                  </select>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveEdit} size="sm">Save Changes</Button>
                    <Button onClick={handleCancelEdit} variant="outline" size="sm">Cancel</Button>
                  </div>
                </div>
              )}

              {/* Add User Form */}
              {isAdding && (
                <div className="p-4 border rounded-lg bg-gray-50 space-y-3">
                  <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value as 'admin' | 'editor' | 'viewer' })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  >
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                  </select>
                  <div className="flex gap-2">
                    <Button onClick={handleAddUser} size="sm">Add User</Button>
                    <Button onClick={() => setIsAdding(false)} variant="outline" size="sm">Cancel</Button>
                  </div>
                </div>
              )}

              {/* Add User Button */}
              {!isAdding && (
                <Button onClick={() => setIsAdding(true)} variant="outline" size="sm">
                  + Add New User
                </Button>
              )}

              {/* Users List */}
              <div className="space-y-2">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                      <div className="text-xs">
                        <span className={`px-2 py-1 rounded text-xs ${
                          user.role === 'admin' ? 'bg-red-100 text-red-700' :
                          user.role === 'editor' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {user.role}
                        </span>
                        <span className={`ml-2 px-2 py-1 rounded text-xs ${
                          user.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {user.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleEditUser(user)}
                        variant="outline"
                        size="sm"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleToggleActive(user.id, !user.isActive)}
                        variant="outline"
                        size="sm"
                      >
                        {user.isActive ? 'Deactivate' : 'Activate'}
                      </Button>
                      {user.email !== 'admin@sola.com' && (
                        <Button
                          onClick={() => handleDeleteUser(user.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          Delete
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Entity Management Section */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-gray-700">Entity Management</h4>
            <Button
              onClick={() => setShowEntitySection(!showEntitySection)}
              variant="outline"
              size="sm"
            >
              {showEntitySection ? 'Hide' : 'Show'}
            </Button>
          </div>
          
          {showEntitySection && (
            <div className="space-y-3">
              {/* Add New Entity Form */}
              <div className="border rounded-lg p-3 bg-gray-50">
                <h5 className="text-sm font-medium mb-2">Add New Entity</h5>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Entity Name"
                    value={newEntityName}
                    onChange={(e) => setNewEntityName(e.target.value)}
                    className="px-2 py-1 border rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Currency Code"
                    value={newEntityCurrencyCode}
                    onChange={(e) => setNewEntityCurrencyCode(e.target.value)}
                    className="px-2 py-1 border rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Tax Account"
                    value={newEntityTaxAccount}
                    onChange={(e) => setNewEntityTaxAccount(e.target.value)}
                    className="px-2 py-1 border rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="SS Account"
                    value={newEntitySSAccount}
                    onChange={(e) => setNewEntitySSAccount(e.target.value)}
                    className="px-2 py-1 border rounded text-sm"
                  />
                </div>
                <Button onClick={handleAddEntity} size="sm" className="mt-2">
                  Add Entity
                </Button>
              </div>

              {/* Existing Entities List */}
              {entities.length > 0 && (
                <div className="border rounded-lg p-3">
                  <h5 className="text-sm font-medium mb-2">Existing Entities</h5>
                  <div className="space-y-2">
                    {entities.map(entity => (
                      <div key={entity.id} className="flex items-center justify-between p-2 border rounded text-xs bg-gray-50">
                        <div>
                          <div className="font-medium">{entity.name}</div>
                          <div className="text-gray-600">
                            Currency: {entity.currencyCode} | Tax: {entity.taxAccount} | SS: {entity.ssAccount}
                          </div>
                        </div>
                        <Button
                          onClick={() => handleDeleteEntity(entity.id)}
                          variant="destructive"
                          size="sm"
                        >
                          Delete
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Backup Management Section */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-gray-700">Backup Management</h4>
            <Button
              onClick={() => setShowBackupSection(!showBackupSection)}
              variant="outline"
              size="sm"
            >
              {showBackupSection ? 'Hide' : 'Show'}
            </Button>
          </div>
          
          {showBackupSection && (
            <div className="space-y-3">
              <div className="border rounded-lg p-3 bg-gray-50">
                <h5 className="text-sm font-medium mb-2">Data Backup & Restore</h5>
                <p className="text-xs text-gray-600 mb-3">
                  Create backups of all your data (projects, users, entities, allocations) and restore them when needed.
                </p>
                
                <div className="space-y-3">
                  {/* Create Backup */}
                  <div className="flex items-center justify-between p-2 border rounded bg-white">
                    <div>
                      <div className="text-sm font-medium">Create Backup</div>
                      <div className="text-xs text-gray-600">Download all data as JSON file</div>
                    </div>
                    <Button onClick={handleCreateBackup} size="sm">
                      Create Backup
                    </Button>
                  </div>
                  
                  {/* Import Backup */}
                  <div className="flex items-center justify-between p-2 border rounded bg-white">
                    <div>
                      <div className="text-sm font-medium">Import Backup</div>
                      <div className="text-xs text-gray-600">Restore data from backup file</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImportBackup}
                        className="text-xs file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-xs text-yellow-800">
                    <strong>Warning:</strong> Importing a backup will overwrite all current data. 
                    Make sure to create a backup before importing.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
