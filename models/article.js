// ArticleSchema
const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    index: true
  }
  content: {
    type: String,
    required: true
  },
  author: String: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const ModelClass = mongoose.model('user', articleSchema);
module.exports = articleModel;
