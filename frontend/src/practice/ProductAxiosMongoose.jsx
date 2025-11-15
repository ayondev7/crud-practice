/**
 * PRACTICE 4: PRODUCT - AXIOS + MONGOOSE  
 * Axios with MongoDB
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = '/api/mongoose/products'

export default function ProductAxiosMongoose() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', description: '', price: '', stock: '', category: '', imageUrl: '' })
  
  useEffect(() => { fetchProducts() }, [])
  
  // TODO: Implement with axios
  const fetchProducts = async () => { console.log('TODO') }
  const handleSubmit = async (e) => { e.preventDefault(); console.log('TODO') }
  const handleDelete = async (id) => { console.log('TODO') }
  
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
