// ArticleSchema
const articleSchema = new Schema({
  title: String,
  content: String,
  author: String: {
    type: String,
    ref: "User"
  }
})
