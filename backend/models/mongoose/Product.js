/**
 * MONGOOSE PRODUCT MODEL
 * 
 * Defines the schema and model for Product collection in MongoDB
 */

const mongoose = require('mongoose');

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [2, 'Product name must be at least 2 characters'],
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, 'Stock cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    enum: {
      values: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys', 'Other'],
      message: '{VALUE} is not a valid category'
    }
  },
  imageUrl: {
    type: String,
    trim: true
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual field: isInStock
productSchema.virtual('isInStock').get(function() {
  return this.stock > 0;
});

// Index for faster queries
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ name: 'text' }); // Text index for search

// Create and export Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
