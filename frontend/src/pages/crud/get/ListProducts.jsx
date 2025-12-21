import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: ''
  });

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = {};
      if (filters.minPrice) params.minPrice = filters.minPrice;
      if (filters.maxPrice) params.maxPrice = filters.maxPrice;
      
      const res = await axios.get('http://localhost:5000/api/v1/products', { params });
      setProducts(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 p-6">
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Home
        </Link>

        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">All Products</h1>
              <p className="text-slate-400">GET /api/v1/products</p>
            </div>
            <button
              onClick={fetchProducts}
              className="rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow-lg hover:bg-purple-700 transition"
            >
              Apply Filters
            </button>
          </div>

          {/* Filters */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Min Price</label>
              <input
                type="number"
                step="0.01"
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Max Price</label>
              <input
                type="number"
                step="0.01"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none"
                placeholder="1000"
              />
            </div>
          </div>

          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <h3 className="text-sm font-semibold text-red-400 mb-2">Error</h3>
              <p className="text-sm text-slate-300">{error}</p>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-8 text-center">
              <p className="text-slate-400">No products found</p>
            </div>
          )}

          {!loading && products.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <div
                  key={product._id || product.id}
                  className="rounded-lg border border-slate-700 bg-slate-950/60 p-5 hover:border-purple-500/50 transition"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <span className="text-lg font-bold text-green-400">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mb-3">{product.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Stock: {product.stock}</span>
                    <span className="text-xs text-slate-500 font-mono">
                      {product._id || product.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
