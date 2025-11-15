/**
 * EXAMPLE 8: FULL STACK (MONGOOSE)
 * React Query + Axios + React Hook Form with MongoDB
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const API_URL = '/api/mongoose/users'

export default function FullStackMongoose() {
  const queryClient = useQueryClient()
  const [editingId, setEditingId] = useState(null)
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()

  const { data, isLoading } = useQuery({
    queryKey: ['users-mongoose-full'],
    queryFn: async () => (await axios.get(API_URL)).data.data
  })

  const saveMutation = useMutation({
    mutationFn: (userData) => editingId ? axios.put(`${API_URL}/${editingId}`, userData) : axios.post(API_URL, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users-mongoose-full'] })
      reset()
      setEditingId(null)
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users-mongoose-full'] })
  })

  const onSubmit = (data) => {
    saveMutation.mutate({
      ...data,
      age: data.age ? parseInt(data.age) : undefined
    })
  }

  const handleEdit = (user) => {
    setValue('name', user.name)
    setValue('email', user.email)
    setValue('age', user.age || '')
    setEditingId(user._id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const users = data || []

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 inline-block mb-4">← Back</Link>
          <h1 className="text-3xl font-bold text-gray-800">Example 8: Full Stack (Mongoose)</h1>
          <p className="text-gray-600 mt-2">React Query + Axios + React Hook Form with MongoDB</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{editingId ? '✏️ Edit' : '➕ Create'}</h2>
            {saveMutation.isSuccess && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">Success!</div>}
            {saveMutation.isError && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">Error!</div>}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input {...register('name', { required: 'Required', minLength: { value: 2, message: 'Min 2 chars' } })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.name ? 'border-red-500' : ''}`} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid' } })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-500' : ''}`} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Age</label>
                <input type="number" {...register('age', { min: { value: 0, message: 'Positive' }, max: { value: 150, message: '<150' } })} className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 ${errors.age ? 'border-red-500' : ''}`} />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
              </div>
              <div className="flex gap-3">
                <button type="submit" disabled={saveMutation.isPending} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50">
                  {saveMutation.isPending ? 'Saving...' : editingId ? 'Update' : 'Create'}
                </button>
                {editingId && <button type="button" onClick={() => { reset(); setEditingId(null) }} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">📋 Users</h2>
            {isLoading && <div className="text-center py-8">Loading...</div>}
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
                      <button onClick={() => window.confirm('Delete?') && deleteMutation.mutate(user._id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Del</button>
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
