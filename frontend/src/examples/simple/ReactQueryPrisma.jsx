/**
 * EXAMPLE 5: REACT QUERY (PRISMA)
 * 
 * React Query (TanStack Query) provides powerful data fetching with:
 * - Automatic caching
 * - Background refetching
 * - Loading and error states
 * - Mutation handling
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = '/api/prisma/users'

export default function ReactQueryPrisma() {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState({ name: '', email: '', age: '' })
  const [editingId, setEditingId] = useState(null)

  // FETCH USERS with React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ['users-prisma'],
    queryFn: async () => {
      const response = await axios.get(API_URL)
      return response.data.data
    }
  })

  // CREATE/UPDATE MUTATION
  const saveMutation = useMutation({
    mutationFn: async (userData) => {
      if (editingId) {
        return axios.put(`${API_URL}/${editingId}`, userData)
      }
      return axios.post(API_URL, userData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users-prisma'] })
      setFormData({ name: '', email: '', age: '' })
      setEditingId(null)
    }
  })

  // DELETE MUTATION
  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users-prisma'] })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    saveMutation.mutate({
      name: formData.name,
      email: formData.email,
      age: formData.age ? parseInt(formData.age) : null
    })
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this user?')) {
      deleteMutation.mutate(id)
    }
  }

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, age: user.age || '' })
    setEditingId(user.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const users = data || []

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← Back</Link>
          <h1 className="text-3xl font-bold text-gray-800">Example 5: React Query (Prisma)</h1>
          <p className="text-gray-600 mt-2">Smart data fetching with caching & auto-refetch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{editingId ? '✏️ Edit' : '➕ Create'}</h2>
            
            {saveMutation.isSuccess && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">Saved!</div>}
            {saveMutation.isError && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{saveMutation.error?.response?.data?.message || 'Error'}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Age</label>
                <input type="number" name="age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} min="0" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex gap-3">
                <button type="submit" disabled={saveMutation.isPending} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50">
                  {saveMutation.isPending ? 'Saving...' : editingId ? 'Update' : 'Create'}
                </button>
                {editingId && <button type="button" onClick={() => { setFormData({ name: '', email: '', age: '' }); setEditingId(null) }} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Users</h2>
            {isLoading && <div className="text-center py-8">Loading...</div>}
            {error && <div className="p-4 bg-red-100 text-red-700 rounded-lg">Error loading users</div>}
            {users.length === 0 && !isLoading && <div className="text-center py-8 text-gray-500">No users</div>}
            <div className="space-y-3">
              {users.map(user => (
                <div key={user.id} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      {user.age && <p className="text-sm text-gray-500">Age: {user.age}</p>}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(user)} className="px-3 py-1 bg-yellow-500 text-white rounded text-sm">Edit</button>
                      <button onClick={() => handleDelete(user.id)} disabled={deleteMutation.isPending} className="px-3 py-1 bg-red-500 text-white rounded text-sm disabled:opacity-50">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-indigo-800 mb-3">🚀 React Query Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ <strong>Auto Caching:</strong> Data cached automatically</li>
            <li>✅ <strong>Background Refetch:</strong> Updates data in background</li>
            <li>✅ <strong>Loading States:</strong> isLoading, isPending built-in</li>
            <li>✅ <strong>Mutations:</strong> useMutation for POST/PUT/DELETE</li>
            <li>✅ <strong>Cache Invalidation:</strong> queryClient.invalidateQueries()</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
