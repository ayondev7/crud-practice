/**
 * PRACTICE 2: PRODUCT - VANILLA + MONGOOSE
 * Same as Practice 1 but with MongoDB backend
 * Note: MongoDB uses _id instead of id
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_URL = '/api/mongoose/products'

export default function ProductVanillaMongoose() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({ name: '', description: '', price: '', stock: '', category: '', imageUrl: '' })

  useEffect(() => {
    fetchProducts()
  }, [])

  // TODO: Implement these functions
  const fetchProducts = async () => { console.log('TODO: fetchProducts') }
  const handleSubmit = async (e) => { e.preventDefault(); console.log('TODO: handleSubmit') }
  const handleDelete = async (id) => { console.log('TODO: handleDelete', id) }
  const handleEdit = (product) => { console.log('TODO: handleEdit', product) }
  const handleChange = (e) => { console.log('TODO: handleChange') }
  const handleCancelEdit = () => { setFormData({ name: '', description: '', price: '', stock: '', category: '', imageUrl: '' }); setEditingId(null) }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← Back</Link>
          <h1 className="text-3xl font-bold">Practice 2: Product (Vanilla + Mongoose)</h1>
          <p className="text-gray-600 mt-2">MongoDB version - Note: Use _id instead of id</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">📝 Task: Implement CRUD with MongoDB</h3>
          <p className="text-sm text-gray-700">Hint: MongoDB uses <code className="bg-yellow-100 px-2 py-1">_id</code> instead of <code className="bg-yellow-100 px-2 py-1">id</code></p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{editingId ? '✏️ Edit' : '➕ Create'}</h2>
            {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">{success}</div>}
            {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-medium mb-2">Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3" className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-medium mb-2">Price *</label>
                  <input type="number" name="price" value={formData.price} onChange={handleChange} required min="0" step="0.01" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block font-medium mb-2">Stock</label>
                  <input type="number" name="stock" value={formData.stock} onChange={handleChange} min="0" className="w-full px-4 py-2 border rounded-lg" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Category *</label>
                <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg">
                  <option value="">Select</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Food">Food</option>
                  <option value="Books">Books</option>
                  <option value="Toys">Toys</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block font-medium mb-2">Image URL</label>
                <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div className="flex gap-3">
                <button type="submit" disabled={loading} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50">
                  {loading ? 'Processing...' : editingId ? 'Update' : 'Create'}
                </button>
                {editingId && <button type="button" onClick={handleCancelEdit} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>}
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">🛍️ Products</h2>
            {loading && <div className="text-center py-8">Loading...</div>}
            {products.length === 0 && !loading && <div className="text-center py-8 text-gray-500">No products</div>}
            <div className="space-y-4">
              {products.map(product => (
                <div key={product._id} className="border rounded-lg p-4">
                  <div className="flex gap-4">
                    {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded" />}
                    <div className="flex-1">
                      <h3 className="font-bold">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-green-600 font-bold">${product.price}</span>
                        <span className="text-gray-500">Stock: {product.stock}</span>
                        <span className="text-blue-600">{product.category}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button onClick={() => handleEdit(product)} className="px-3 py-1 bg-yellow-500 text-white rounded text-sm">Edit</button>
                      <button onClick={() => handleDelete(product._id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Delete</button>
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
