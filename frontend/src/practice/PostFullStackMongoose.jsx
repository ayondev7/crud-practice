/**
 * PRACTICE 8: BLOG POST - FULL STACK (MONGOOSE)
 */

import { Link } from 'react-router-dom'

export default function PostFullStackMongoose() {
  // TODO: Full stack with MongoDB
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800 inline-block mb-4">← Back</Link>
        <h1 className="text-3xl font-bold">Practice 8: Blog Posts (Full Stack - Mongoose)</h1>
        <p className="text-gray-600 mt-2">Full stack with MongoDB</p>
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <p className="text-center py-8 text-gray-500">TODO: Full stack + MongoDB...</p>
        </div>
      </div>
    </div>
  )
}
