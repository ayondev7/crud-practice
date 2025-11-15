/**
 * PRACTICE 1: PRODUCT MANAGEMENT - VANILLA JS + FETCH (PRISMA)
 * 
 * YOUR TASK: Implement the CRUD functionality for products
 * 
 * TODO:
 * 1. Implement fetchProducts() - GET all products
 * 2. Implement handleSubmit() - CREATE new product or UPDATE existing
 * 3. Implement handleDelete() - DELETE product
 * 4. Implement handleEdit() - Load product data into form
 * 5. Handle form input changes
 * 
 * API ENDPOINTS:
 * - GET    /api/prisma/products - Get all products
 * - POST   /api/prisma/products - Create product
 * - PUT    /api/prisma/products/:id - Update product
 * - DELETE /api/prisma/products/:id - Delete product
 * 
 * PRODUCT SCHEMA:
 * {
 *   name: string (required)
 *   description: string (optional)
 *   price: number (required)
 *   stock: number (default: 0)
 *   category: string (required) - "Electronics", "Clothing", "Food", "Books", "Toys", "Other"
 *   imageUrl: string (optional)
 * }
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_URL = '/api/prisma/products'

export default function ProductVanillaPrisma() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [editingId, setEditingId] = useState(null)
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    imageUrl: ''
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  /**
   * TODO: Implement this function
   * Fetch all products from the API
   * Handle loading state and errors
   */
  const fetchProducts = async () => {
    // YOUR CODE HERE
    // Hint: Use fetch() with GET method
    // Don't forget to set loading state
    // Parse the JSON response and update products state
    console.log('TODO: Implement fetchProducts()')
  }

  /**
   * TODO: Implement this function
   * Create or update a product
   * Use POST for create, PUT for update
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    // YOUR CODE HERE
    // Hint: Check if editingId exists to determine POST or PUT
    // Convert price and stock to numbers
    // Handle success/error messages
    console.log('TODO: Implement handleSubmit()')
  }

  /**
   * TODO: Implement this function
   * Delete a product by ID
   */
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return
    // YOUR CODE HERE
    // Hint: Use DELETE method
    // Refresh products list after successful delete
    console.log('TODO: Implement handleDelete() for id:', id)
  }

  /**
   * TODO: Implement this function
   * Load product data into form for editing
   */
  const handleEdit = (product) => {
    // YOUR CODE HERE
    // Hint: Set formData with product values
    // Set editingId
    // Scroll to top
    console.log('TODO: Implement handleEdit() for product:', product)
  }

  /**
   * TODO: Implement this function
   * Handle input field changes
   */
  const handleChange = (e) => {
    // YOUR CODE HERE
    // Hint: Update formData state with new value
    console.log('TODO: Implement handleChange()')
  }

  const handleCancelEdit = () => {
    setFormData({ name: '', description: '', price: '', stock: '', category: '', imageUrl: '' })
    setEditingId(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-3xl font-bold text-gray-800">Practice 1: Product Management (Vanilla + Prisma)</h1>
          <p className="text-gray-600 mt-2">Complete the CRUD functionality using Fetch API</p>
        </div>

        {/* Instructions Card */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-yellow-800 mb-2">📝 Your Task</h3>
          <p className="text-gray-700 mb-3">Implement the following functions in this file:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><code className="bg-yellow-100 px-2 py-1 rounded">fetchProducts()</code> - Fetch all products from API</li>
            <li><code className="bg-yellow-100 px-2 py-1 rounded">handleSubmit()</code> - Create or update product</li>
            <li><code className="bg-yellow-100 px-2 py-1 rounded">handleDelete()</code> - Delete product</li>
            <li><code className="bg-yellow-100 px-2 py-1 rounded">handleEdit()</code> - Load product into form</li>
            <li><code className="bg-yellow-100 px-2 py-1 rounded">handleChange()</code> - Handle form input changes</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {editingId ? '✏️ Edit Product' : '➕ Create Product'}
            </h2>
            
            {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">{success}</div>}
            {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Product Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Price *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Stock</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Food">Food</option>
                  <option value="Books">Books</option>
                  <option value="Toys">Toys</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
                >
                  {loading ? 'Processing...' : editingId ? 'Update Product' : 'Create Product'}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Products List */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🛍️ Products</h2>
            
            {loading && products.length === 0 && <div className="text-center py-8 text-gray-500">Loading...</div>}
            {products.length === 0 && !loading && <div className="text-center py-8 text-gray-500">No products found. Create your first product!</div>}

            <div className="space-y-4">
              {products.map(product => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex gap-4">
                    {product.imageUrl && (
                      <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-1">{product.description}</p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-green-600 font-bold">${product.price}</span>
                        <span className="text-gray-500">Stock: {product.stock}</span>
                        <span className="text-blue-600">{product.category}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                      >
                        Delete
                      </button>
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
