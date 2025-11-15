/**
 * PRACTICE 7: BLOG POST - FULL STACK (PRISMA)
 * React Query + Axios + React Hook Form
 */

import { Link } from 'react-router-dom'

export default function PostFullStackPrisma() {
  // TODO: Combine React Query + Axios + React Hook Form
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800 inline-block mb-4">← Back</Link>
        <h1 className="text-3xl font-bold">Practice 7: Blog Posts (Full Stack - Prisma)</h1>
        <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-purple-800 mb-2">🏆 Advanced Challenge</h3>
          <p className="text-sm text-gray-700">Combine all three libraries:</p>
          <ul className="text-sm space-y-1 mt-2 text-gray-700">
            <li>✓ React Hook Form for validation</li>
            <li>✓ React Query for data fetching</li>
            <li>✓ Axios for HTTP requests</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-center py-8 text-gray-500">TODO: Full stack implementation...</p>
        </div>
      </div>
    </div>
  )
}
