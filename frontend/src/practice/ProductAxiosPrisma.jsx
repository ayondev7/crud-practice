/**
 * PRACTICE 3: PRODUCT - AXIOS + PRISMA
 * Use Axios library instead of fetch
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = '/api/prisma/products'

export default function ProductAxiosPrisma() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ name: '', description: '', price: '', stock: '', category: '', imageUrl: '' })

  useEffect(() => { fetchProducts() }, [])

  // TODO: Use axios.get(), axios.post(), axios.put(), axios.delete()
  const fetchProducts = async () => { console.log('TODO: axios.get()') }
  const handleSubmit = async (e) => { e.preventDefault(); console.log('TODO: axios.post() or axios.put()') }
  const handleDelete = async (id) => { console.log('TODO: axios.delete()') }
  const handleEdit = (product) => { console.log('TODO: handleEdit') }
  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 inline-block mb-4">← Back</Link>
          <h1 className="text-3xl font-bold">Practice 3: Product (Axios + Prisma)</h1>
          <p className="text-gray-600 mt-2">Use Axios: axios.get(), axios.post(), axios.put(), axios.delete()</p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-purple-800 mb-2">📝 Task: Use Axios Methods</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <code className="bg-purple-100 px-2">axios.get(url)</code> - Fetch products</li>
            <li>• <code className="bg-purple-100 px-2">axios.post(url, data)</code> - Create</li>
            <li>• <code className="bg-purple-100 px-2">axios.put(url, data)</code> - Update</li>
            <li>• <code className="bg-purple-100 px-2">axios.delete(url)</code> - Delete</li>
          </ul>
        </div>

        {/* Same UI as previous, omitted for brevity */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-center py-8 text-gray-500">Implement the axios functionality above...</p>
        </div>
      </div>
    </div>
  )
}
