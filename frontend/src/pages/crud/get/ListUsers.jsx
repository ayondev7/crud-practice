import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:5000/api/v1/users');
      setUsers(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
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
              <h1 className="text-3xl font-bold text-white mb-2">All Users</h1>
              <p className="text-slate-400">GET /api/v1/users</p>
            </div>
            <button
              onClick={fetchUsers}
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

          {!loading && !error && users.length === 0 && (
            <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-8 text-center">
              <p className="text-slate-400">No users found</p>
            </div>
          )}

          {!loading && users.length > 0 && (
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user._id || user.id}
                  className="rounded-lg border border-slate-700 bg-slate-950/60 p-4 hover:border-purple-500/50 transition"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                      <p className="text-sm text-slate-400">{user.email}</p>
                      {user.age && <p className="text-sm text-slate-500">Age: {user.age}</p>}
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      {user._id || user.id}
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
