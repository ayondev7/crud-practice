import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function GetUserById() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const res = await axios.get(`http://localhost:5000/api/v1/users/${userId}`);
      setUser(res.data);
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
            <h1 className="text-3xl font-bold text-white mb-2">Get User by ID</h1>
            <p className="text-slate-400">GET /api/v1/users/:id</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="507f1f77bcf86cd799439011"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Fetching...' : 'Get User'}
            </button>
          </form>

          {user && (
            <div className="mt-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
              <h3 className="text-sm font-semibold text-green-400 mb-3">User Found</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-xs text-slate-400">Name:</span>
                  <p className="text-slate-100">{user.name}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Email:</span>
                  <p className="text-slate-100">{user.email}</p>
                </div>
                {user.age && (
                  <div>
                    <span className="text-xs text-slate-400">Age:</span>
                    <p className="text-slate-100">{user.age}</p>
                  </div>
                )}
                <details className="mt-4">
                  <summary className="cursor-pointer text-xs text-slate-400">View Raw JSON</summary>
                  <pre className="mt-2 text-xs text-slate-300 overflow-x-auto">
                    {JSON.stringify(user, null, 2)}
                  </pre>
                </details>
              </div>
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
