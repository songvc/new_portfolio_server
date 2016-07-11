// ArticleSchema
const articleSchema = new Schema({
  title: String,
  content: String,
  author: String: {
    type: String,
    ref: "User"
  }
})

const ModelClass = mongoose.model('user', articleSchema);
module.exports = articleModel;
