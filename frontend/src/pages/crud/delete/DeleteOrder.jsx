import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function DeleteOrder() {
  const [orderId, setOrderId] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!confirmDelete) {
      alert('Please confirm deletion by checking the box');
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios.delete(`http://localhost:5000/api/v1/orders/${orderId}`);
      setResponse(res.data);
      setOrderId('');
      setConfirmDelete(false);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 p-6">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Home
        </Link>

        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-2xl p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Delete Order</h1>
            <p className="text-slate-400">DELETE /api/v1/orders/:id</p>
            <div className="mt-3 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
              <p className="text-sm text-red-300">⚠️ Warning: This action cannot be undone!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Order ID</label>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                placeholder="507f1f77bcf86cd799439011"
                required
              />
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-950/30 p-4">
              <input
                type="checkbox"
                id="confirm"
                checked={confirmDelete}
                onChange={(e) => setConfirmDelete(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="confirm" className="text-sm text-slate-300">
                I understand that this will permanently delete the order and this action cannot be undone.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !confirmDelete}
              className="w-full rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/25 transition hover:shadow-red-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Deleting...' : 'Delete Order'}
            </button>
          </form>

          {response && (
            <div className="mt-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
              <h3 className="text-sm font-semibold text-green-400 mb-2">Order Deleted Successfully!</h3>
              <pre className="text-xs text-slate-300 overflow-x-auto">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <h3 className="text-sm font-semibold text-red-400 mb-2">Error</h3>
              <p className="text-sm text-slate-300">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
