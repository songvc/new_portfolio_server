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
  }
})

const commentModel = mongoose.model('user', commentSchema);
module.exports = commentModel;
