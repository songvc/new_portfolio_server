import mongoose, { Schema } from 'mongoose';

/**
 * Article Schema
 */

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    index: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

/**
 * Validations
 */

// articleSchema.path('title').required(true, 'Article title cannot be blank');
// articleSchema.path('body').required(true, 'Article body cannot be blank');


export default mongoose.model('Article', articleSchema);
