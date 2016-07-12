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

/**
 * Validations
 */

articleSchema.path('title').required(true, 'Article title cannot be blank');
articleSchema.path('body').required(true, 'Article body cannot be blank');


const ModelClass = mongoose.model('user', articleSchema);
module.exports = articleModel;
