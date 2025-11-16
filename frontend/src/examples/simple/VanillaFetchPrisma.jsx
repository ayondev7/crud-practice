/**
 * EXAMPLE 1: VANILLA JAVASCRIPT + FETCH API (PRISMA/POSTGRESQL)
 * 
 * This example demonstrates basic CRUD operations using:
 * - Vanilla JavaScript
 * - Fetch API for HTTP requests
 * - Prisma/PostgreSQL backend
 * 
 * LEARNING OBJECTIVES:
 * - Understand basic fetch() syntax
 * - Handle async/await
 * - Manage form state manually
 * - Display data in a list
 * - Perform CREATE, READ, UPDATE, DELETE operations
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_URL = '/api/prisma/users'

export default function VanillaFetchPrisma() {
  // State management
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  })
  
  // Edit mode
  const [editingId, setEditingId] = useState(null)

  // Fetch all users on component mount
  useEffect(() => {
    fetchUsers()
  }, [])

  /**
   * FETCH ALL USERS (READ)
   * GET request to retrieve all users
   */
  const fetchUsers = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(API_URL)
      
      // Check if response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const json = await response.json()
      setUsers(json.data || [])
    } catch (err) {
      setError(err.message)
      console.error('Error fetching users:', err)
    } finally {
      setLoading(false)
    }
  }

  /**
   * CREATE USER
   * POST request to create a new user
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const url = editingId ? `${API_URL}/${editingId}` : API_URL
      const method = editingId ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: formData.age ? parseInt(formData.age) : null
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to save user')
      }

      await response.json()
      setSuccess(editingId ? 'User updated successfully!' : 'User created successfully!')
      
      // Reset form
      setFormData({ name: '', email: '', age: '' })
      setEditingId(null)
      
      // Refresh user list
      fetchUsers()
    } catch (err) {
      setError(err.message)
      console.error('Error saving user:', err)
    } finally {
      setLoading(false)
    }
  }

  /**
   * DELETE USER
   * DELETE request to remove a user
   */
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete user')
      }

      setSuccess('User deleted successfully!')
      fetchUsers()
    } catch (err) {
      setError(err.message)
      console.error('Error deleting user:', err)
    } finally {
      setLoading(false)
    }
  }

  /**
   * PREPARE EDIT
   * Load user data into form for editing
   */
  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      age: user.age || ''
    })
    setEditingId(user.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /**
   * CANCEL EDIT
   */
  const handleCancelEdit = () => {
    setFormData({ name: '', email: '', age: '' })
    setEditingId(null)
  }

  /**
   * HANDLE INPUT CHANGE
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Example 1: Vanilla JS + Fetch (Prisma)</h1>
          <p className="text-gray-600 mt-2">PostgreSQL database using Prisma ORM</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingId ? '✏️ Edit User' : '➕ Create User'}
            </h2>
            
            {/* Success Message */}
            {success && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                {success}
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email"
                />
              </div>

              {/* Age Field */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0"
                  max="150"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter age (optional)"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {loading ? 'Processing...' : editingId ? 'Update User' : 'Create User'}
                </button>
                
                {editingId && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Users List Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Users List</h2>
            
            {loading && users.length === 0 && (
              <div className="text-center py-8 text-gray-500">Loading...</div>
            )}

            {users.length === 0 && !loading && (
              <div className="text-center py-8 text-gray-500">
                No users found. Create your first user!
              </div>
            )}

            <div className="space-y-3">
              {users.map(user => (
                <div key={user.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">{user.name}</h3>
                      <p className="text-gray-600 text-sm">{user.email}</p>
                      {user.age && (
                        <p className="text-gray-500 text-sm">Age: {user.age}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code Explanation */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-3">📚 What You're Learning</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ <strong>Fetch API:</strong> Using native fetch() for HTTP requests</li>
            <li>✅ <strong>Async/Await:</strong> Handling asynchronous operations</li>
            <li>✅ <strong>State Management:</strong> Using React useState hook</li>
            <li>✅ <strong>CRUD Operations:</strong> Create, Read, Update, Delete</li>
            <li>✅ <strong>Error Handling:</strong> Try/catch blocks and error messages</li>
            <li>✅ <strong>Form Handling:</strong> Controlled components in React</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
