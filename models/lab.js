import mongoose, { Schema } from 'mongoose';

const labSchema = new Schema({
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

export default mongoose.model('Lab', labSchema);
