import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:5000/api/v1/orders');
      setOrders(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      processing: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      shipped: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      delivered: 'bg-green-500/10 text-green-400 border-green-500/30',
      cancelled: 'bg-red-500/10 text-red-400 border-red-500/30',
    };
    return colors[status] || 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 p-6">
      <div className="mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6">
          ← Back to Home
        </Link>

        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">All Orders</h1>
              <p className="text-slate-400">GET /api/v1/orders</p>
            </div>
            <button
              onClick={fetchOrders}
              className="rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white shadow-lg hover:bg-purple-700 transition"
            >
              Refresh
            </button>
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

          {!loading && !error && orders.length === 0 && (
            <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-8 text-center">
              <p className="text-slate-400">No orders found</p>
            </div>
          )}

          {!loading && orders.length > 0 && (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order._id || order.id}
                  className="rounded-lg border border-slate-700 bg-slate-950/60 p-5 hover:border-purple-500/50 transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">Order #{order._id || order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      {order.user && (
                        <p className="text-sm text-slate-400">
                          User: {order.user.name || order.user}
                        </p>
                      )}
                    </div>
                    {order.totalPrice && (
                      <span className="text-lg font-bold text-green-400">
                        ${order.totalPrice}
                      </span>
                    )}
                  </div>
                  {order.products && order.products.length > 0 && (
                    <div className="mt-3 border-t border-slate-700 pt-3">
                      <p className="text-xs text-slate-400 mb-2">Products:</p>
                      <div className="space-y-1">
                        {order.products.map((item, idx) => (
                          <div key={idx} className="text-sm text-slate-300">
                            {item.product?.name || item.product} × {item.quantity}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
