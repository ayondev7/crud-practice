/**
 * MONGOOSE POST MODEL
 * 
 * Defines the schema and model for Post collection in MongoDB
 */

const mongoose = require('mongoose');

// Define Post Schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters'],
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: {
    type: String,
    trim: true
  },
  published: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Author is required']
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for faster queries
postSchema.index({ author: 1 });
postSchema.index({ published: 1 });

// Create and export Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
