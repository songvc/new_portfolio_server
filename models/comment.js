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

const commentModel = mongoose.model('user', commentSchema);
module.exports = commentModel;
