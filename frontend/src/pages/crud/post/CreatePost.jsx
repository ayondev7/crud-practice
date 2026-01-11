import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CREATE_POST } from "../../../routes/postRoutes";
import toast from "react-hot-toast";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChnage = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    try { 
      const res = await axios.post(CREATE_POST,formData);
      toast.success(res.data.message);
      setFormData({
        title:"",
        author:"",
        content:""
      });
    } catch (error) {
      toast.error(error?.res?.data?.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 p-6">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6"
        >
          ← Back to Home
        </Link>

        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-2xl p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Create New Post
            </h1>
            <p className="text-slate-400">POST /api/v1/posts</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Title
              </label>
              <input
                name="title"
                type="text"
                placeholder="My Awesome Post"
                onChange={handleChnage}
                value={formData.name}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Content
              </label>
              <textarea
                name="content"
                value={formData.name}
                onChange={handleChnage}
                placeholder="Write your post content here..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 min-h-[150px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={formData.name}
                onChange={handleChnage}
                placeholder="Author Name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-purple-500/40"
            >
              {!loading ? 'Create Post' : 'Creating'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
