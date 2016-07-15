import User from '../models/user';
import Article from '../models/article';
import config from '../config';

const createArticle = (req, res, next) => {
  console.log(req.body);
  const { title, tags ,content } = req.body;

  //create an article
  const article = new Article({
    title,
    tags,
    content
  });

  article.saveAsync()
    .then(savedArticle => res.json(savedArticle))
    .error(e => next(e));
}

const deleteArticle = (req, res, next) => {
  console.log(req.body);

}

const getArticles = (req, res, next) => {
  console.log(req.body);
  // allow pagination with limit and skip queries
  const { limit = 50, skip = 0 } = req.query;
  Article.list({ limit, skip })
    .then(function(articles) {
      res.json(articles);
    })
    .catch(next)
    .error(console.error);
}

const getArticle = (req, res, next, id) => {
  console.log(req.body);
  Article.get(id)
    .then((article) => {
      res.json(article);
    })
    .error(console.error);
}

const updateArticle = (req, res, next) => {
  console.log(req.body);
  const article = req.article;
  const { title, tags ,content } = req.body;

  article.saveAsync()
    .then((article) => res.json(article))
    .error(console.error);

}

export default { createArticle, deleteArticle, getArticles, getArticle, updateArticle };
