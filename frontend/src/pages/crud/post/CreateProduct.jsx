import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CREATE_PRODUCT } from "../../../routes/productRoutes";

export default function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dataToSubmit = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price) || 0,
      stock: parseInt(formData.stock) || 0,
      categoryName: formData.category,
    };
    try {
      const res = await axios.post(CREATE_PRODUCT, dataToSubmit);
      toast.success(res?.data?.message);
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
      })
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error?.res?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950/20 to-slate-950 p-6">
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
              Create New Product
            </h1>
            <p className="text-slate-400">POST /api/v1/products</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Product Name <span className="text-red-400">*</span>
              </label>
              <input
                name="name"
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="Wireless Mouse"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none"
                placeholder="Enter product description..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Price & Stock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Price ($) <span className="text-red-400">*</span>
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="29.99"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Stock
                </label>
                <input
                  name="stock"
                  type="number"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="100"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-slate-100 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-linear-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-purple-500/40"
            >
              {loading ? "Creating" : "Create"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
