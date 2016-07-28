import mongoose, { Schema } from 'mongoose';

// PortflioSchema
const portfolioSchema = new Schema({
  text: String,
  article: {
    type: String,
    ref: "Article"
  },
  image: {
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

export default mongoose.model('Portflio', portfolioSchema);
