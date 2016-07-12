import mongoose, { Schema } from 'mongoose';

// CommentSchema
const commentSchema = new Schema({
  text: String,
  article: {
    type: String,
    ref: "Article"
  },
  author: {
    type: String,
    ref: "user"
  },
  cratedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Comment', commentSchema);
