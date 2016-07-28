import mongoose, { Schema } from 'mongoose';

// CommentSchema
const commentSchema = new Schema({
  text: String,
  article: {
    type: String
  },
  author: {
    type: String
  },
  cratedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Comment', commentSchema);
