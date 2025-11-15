/**
 * EXAMPLE 2: VANILLA JAVASCRIPT + FETCH API (MONGOOSE/MONGODB)
 * 
 * This example is identical to Example 1, but uses MongoDB with Mongoose
 * Compare this with the Prisma version to see the API differences
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_URL = '/api/mongoose/users'

export default function VanillaFetchMongoose() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', age: '' })
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      setUsers(data.data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const url = editingId ? `${API_URL}/${editingId}` : API_URL
      const method = editingId ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: formData.age ? parseInt(formData.age) : undefined
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to save user')
      }

      setSuccess(editingId ? 'User updated!' : 'User created!')
      setFormData({ name: '', email: '', age: '' })
      setEditingId(null)
      fetchUsers()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return

    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Failed to delete')
      setSuccess('User deleted!')
      fetchUsers()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, age: user.age || '' })
    setEditingId(user._id) // Note: MongoDB uses _id
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelEdit = () => {
    setFormData({ name: '', email: '', age: '' })
    setEditingId(null)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-3xl font-bold text-gray-800">Example 2: Vanilla JS + Fetch (Mongoose)</h1>
          <p className="text-gray-600 mt-2">MongoDB database using Mongoose ODM</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingId ? '✏️ Edit User' : '➕ Create User'}
            </h2>
            
            {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">{success}</div>}
            {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="0"
                  max="150"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter age (optional)"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 transition"
                >
                  {loading ? 'Processing...' : editingId ? 'Update User' : 'Create User'}
                </button>
                {editingId && (
                  <button type="button" onClick={handleCancelEdit} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Users List</h2>
            
            {loading && users.length === 0 && <div className="text-center py-8 text-gray-500">Loading...</div>}
            {users.length === 0 && !loading && <div className="text-center py-8 text-gray-500">No users found. Create your first user!</div>}

            <div className="space-y-3">
              {users.map(user => (
                <div key={user._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">{user.name}</h3>
                      <p className="text-gray-600 text-sm">{user.email}</p>
                      {user.age && <p className="text-gray-500 text-sm">Age: {user.age}</p>}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(user)} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-sm">Edit</button>
                      <button onClick={() => handleDelete(user._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-800 mb-3">🍃 MongoDB Differences</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ <strong>_id:</strong> MongoDB uses _id instead of id</li>
            <li>✅ <strong>ObjectId:</strong> IDs are strings (MongoDB ObjectId)</li>
            <li>✅ <strong>Schema:</strong> Mongoose provides schema validation</li>
            <li>✅ <strong>Same API:</strong> HTTP methods remain the same</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
