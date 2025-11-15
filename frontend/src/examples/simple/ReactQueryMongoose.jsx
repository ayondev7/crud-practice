/**
 * EXAMPLE 6: REACT QUERY (MONGOOSE)
 * Same as Example 5 but with MongoDB
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = '/api/mongoose/users'

export default function ReactQueryMongoose() {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState({ name: '', email: '', age: '' })
  const [editingId, setEditingId] = useState(null)

  const { data, isLoading, error } = useQuery({
    queryKey: ['users-mongoose'],
    queryFn: async () => {
      const response = await axios.get(API_URL)
      return response.data.data
    }
  })

  const saveMutation = useMutation({
    mutationFn: async (userData) => {
      if (editingId) {
        return axios.put(`${API_URL}/${editingId}`, userData)
      }
      return axios.post(API_URL, userData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users-mongoose'] })
      setFormData({ name: '', email: '', age: '' })
      setEditingId(null)
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users-mongoose'] })
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    saveMutation.mutate({
      name: formData.name,
      email: formData.email,
      age: formData.age ? parseInt(formData.age) : undefined
    })
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete?')) deleteMutation.mutate(id)
  }

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email, age: user.age || '' })
    setEditingId(user._id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const users = data || []

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← Back</Link>
          <h1 className="text-3xl font-bold text-gray-800">Example 6: React Query (Mongoose)</h1>
          <p className="text-gray-600 mt-2">Smart data fetching with MongoDB</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{editingId ? '✏️ Edit' : '➕ Create'}</h2>
            {saveMutation.isSuccess && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">Saved!</div>}
            {saveMutation.isError && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">Error</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Age</label>
                <input type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="flex gap-3">
                <button type="submit" disabled={saveMutation.isPending} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50">
                  {saveMutation.isPending ? 'Saving...' : editingId ? 'Update' : 'Create'}
                </button>
                {editingId && <button type="button" onClick={() => { setFormData({ name: '', email: '', age: '' }); setEditingId(null) }} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Users</h2>
            {isLoading && <div className="text-center py-8">Loading...</div>}
            {error && <div className="p-4 bg-red-100 text-red-700 rounded-lg">Error</div>}
            {users.length === 0 && !isLoading && <div className="text-center py-8 text-gray-500">No users</div>}
            <div className="space-y-3">
              {users.map(user => (
                <div key={user._id} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      {user.age && <p className="text-sm text-gray-500">Age: {user.age}</p>}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(user)} className="px-3 py-1 bg-yellow-500 text-white rounded text-sm">Edit</button>
                      <button onClick={() => handleDelete(user._id)} disabled={deleteMutation.isPending} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
