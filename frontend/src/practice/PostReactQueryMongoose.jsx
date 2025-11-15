/**
 * PRACTICE 6: BLOG POST - REACT QUERY + MONGOOSE
 */

import { Link } from 'react-router-dom'

export default function PostReactQueryMongoose() {
  // TODO: Implement React Query with MongoDB
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800 inline-block mb-4">← Back</Link>
        <h1 className="text-3xl font-bold">Practice 6: Blog Posts (React Query + Mongoose)</h1>
        <p className="text-gray-600 mt-2">MongoDB version - Use author field with ObjectId</p>
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <p className="text-center py-8 text-gray-500">TODO: Implement with MongoDB...</p>
        </div>
      </div>
    </div>
  )
}
