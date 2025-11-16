/**
 * PRACTICE 4: PRODUCT - AXIOS + MONGOOSE  
 * Axios with MongoDB
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// axios intentionally omitted until implemented

const API_URL = '/api/mongoose/products'

export default function ProductAxiosMongoose() {
  const [_products, _setProducts] = useState([])
  const [_loading, _setLoading] = useState(false)
  const [_formData, _setFormData] = useState({ name: '', description: '', price: '', stock: '', category: '', imageUrl: '' })
  
  // TODO: Implement with axios
  async function fetchProducts() { console.log('TODO') }

  useEffect(() => { fetchProducts() }, [])
  const _handleSubmit = async () => { console.log('TODO') }
  const _handleDelete = async () => { console.log('TODO') }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800 inline-block mb-4">← Back</Link>
        <h1 className="text-3xl font-bold">Practice 4: Product (Axios + Mongoose)</h1>
        <p className="text-gray-600 mt-2">Remember: MongoDB uses _id</p>
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <p className="text-center py-8 text-gray-500">Implement axios + MongoDB functionality...</p>
        </div>
      </div>
    </div>
  )
}
