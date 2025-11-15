/**
 * EXAMPLE 7: FULL STACK (PRISMA)
 * React Query + Axios + React Hook Form
 * 
 * The ultimate combination for production apps
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const API_URL = '/api/prisma/users'

export default function FullStackPrisma() {
  const queryClient = useQueryClient()
  const [editingId, setEditingId] = useState(null)
  
  // React Hook Form
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()

  const { data, isLoading } = useQuery({
    queryKey: ['users-prisma-full'],
    queryFn: async () => {
      const res = await axios.get(API_URL)
      return res.data.data
    }
  })

  const saveMutation = useMutation({
    mutationFn: (userData) => {
      if (editingId) return axios.put(`${API_URL}/${editingId}`, userData)
      return axios.post(API_URL, userData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users-prisma-full'] })
      reset()
      setEditingId(null)
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users-prisma-full'] })
  })

  const onSubmit = (data) => {
    saveMutation.mutate({
      ...data,
      age: data.age ? parseInt(data.age) : null
    })
  }

  const handleEdit = (user) => {
    setValue('name', user.name)
    setValue('email', user.email)
    setValue('age', user.age || '')
    setEditingId(user.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const users = data || []

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 inline-block mb-4">← Back</Link>
          <h1 className="text-3xl font-bold text-gray-800">Example 7: Full Stack (Prisma)</h1>
          <p className="text-gray-600 mt-2">React Query + Axios + React Hook Form</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{editingId ? '✏️ Edit' : '➕ Create'}</h2>
            
            {saveMutation.isSuccess && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">Success!</div>}
            {saveMutation.isError && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{saveMutation.error?.response?.data?.message}</div>}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Min 2 characters' }
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Age</label>
                <input
                  type="number"
                  {...register('age', { 
                    min: { value: 0, message: 'Must be positive' },
                    max: { value: 150, message: 'Must be under 150' }
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.age ? 'border-red-500' : ''}`}
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
              </div>

              <div className="flex gap-3">
                <button type="submit" disabled={saveMutation.isPending} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50">
                  {saveMutation.isPending ? 'Saving...' : editingId ? 'Update' : 'Create'}
                </button>
                {editingId && (
                  <button type="button" onClick={() => { reset(); setEditingId(null) }} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
                )}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">📋 Users</h2>
            {isLoading && <div className="text-center py-8">Loading...</div>}
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
                      <button onClick={() => window.confirm('Delete?') && deleteMutation.mutate(user.id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Del</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-3">🏆 Full Stack Benefits</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ <strong>React Hook Form:</strong> Built-in validation & error handling</li>
            <li>✅ <strong>React Query:</strong> Smart caching & auto-refetch</li>
            <li>✅ <strong>Axios:</strong> Clean HTTP requests</li>
            <li>✅ <strong>Production Ready:</strong> Best practices combined</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
