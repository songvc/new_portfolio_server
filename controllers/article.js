import User from '../models/user';
import Article from '../models/article';
import config from '../config';

const createArticle = (req, res) => {
  console.log(req.body);
  const { title, tags ,text } = req.body;

  //create an article
  const article = new Article({
    title,
    tags,
    text
  });

  article.save(function (err) {
    if (!err) {
      return console.log('article created');
    } else {
      return console.log(err);
    }
  });
}

const deleteArticle = (req, res) => {

}

const getArticles = (req, res) => {
  console.log(req.body);
  const { limit = 50, skip = 0 } = req.query;
  Article.find({}, function (err, articles) {
    if (err) {
      return console.log(err);
    }
    res.fo
  })
}

const getArticle = (req, res) => {
  console.log(req.body);

}

const updateArticle = (req, res) => {
  console.log(req.body);
  const { id } = req.body.params;
  // update an existing article
  Article.findById(id, function(err, article) {
    const { title, tags ,text } = req.body;

    article.save(function(err) {
      if (!err) {
        return console.log('article updated');
      } else {
        return console.log(err);
      }
    })
  })

}

export default { createArticle, deleteArticle, getArticles, getArticle, updateArticle };
