/**
 * PRACTICE 5: BLOG POST - REACT QUERY + PRISMA
 * Learn React Query hooks: useQuery and useMutation
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = '/api/prisma/posts'

export default function PostReactQueryPrisma() {
  const [ _formData ] = useState({ title: '', content: '', published: false, authorId: '' })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800 inline-block mb-4">← Back</Link>
        <h1 className="text-3xl font-bold">Practice 5: Blog Posts (React Query + Prisma)</h1>
        
        <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-indigo-800 mb-2">📝 Task: Implement React Query</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• <code className="bg-indigo-100 px-2">useQuery</code> - Fetch data with caching</li>
            <li>• <code className="bg-indigo-100 px-2">useMutation</code> - For POST/PUT/DELETE</li>
            <li>• <code className="bg-indigo-100 px-2">queryClient.invalidateQueries</code> - Refresh data</li>
          </ul>
          <p className="text-sm mt-3 text-gray-700">
            <strong>Note:</strong> Blog posts need an authorId. Create a user first in the User examples!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-center py-8 text-gray-500">Implement React Query hooks...</p>
        </div>
      </div>
    </div>
  )
}
