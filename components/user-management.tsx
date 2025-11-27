"use client"

import React, { useState } from "react"
import { Button } from "./ui/button"
import { getSystemUsers, addSystemUser, updateSystemUser, deleteSystemUser, type SystemUser } from "../lib/storage"

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">User Management</h3>
          <Button onClick={onClose} variant="outline" size="sm">
            ×
          </Button>
        </div>

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
      </div>
    </div>
  )
}
