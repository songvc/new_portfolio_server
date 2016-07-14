import User from '../models/user';
import Article from '../models/article';
import config from '../config';

const createArticle = (req, res, next) => {
  console.log(req.body);
  const { title, tags ,text } = req.body;

  //create an article
  const savedArticle = new Article({
    title,
    tags,
    text
  });

  article.saveAsync()
    .then(savedArticle => res.json(savedArticle))
    .error(e => next(e));
  // (function (err) {
  //   if (!err) {
  //     return console.log('article created');
  //   } else {
  //     return console.log(err);
  //   }
  // });
}

const deleteArticle = (req, res, next) => {
  console.log(req.body);
  // const { id }
}

const getArticles = (req, res, next) => {
  console.log(req.body);
  const { limit = 50, skip = 0 } = req.query;
  Article.findAsync()
    .then(function(articles) {
      res.json(articles);
    })
    .catch(next)
    .error(console.error);
}

const getArticle = (req, res, next) => {
  console.log(req.body);

}

const updateArticle = (req, res, next) => {
  // console.log(req.body);
  // const { id } = req.body.params;
  // // update an existing article
  // Article.findByIdAsync()
  //   .then
  //
  //
  //
  // (id, function(err, article) {
  //   const { title, tags ,text } = req.body;
  //
  //   article.save(function(err) {
  //     if (!err) {
  //       return console.log('article updated');
  //     } else {
  //       return console.log(err);
  //     }
  //   })
  // })

}

export default { createArticle, deleteArticle, getArticles, getArticle, updateArticle };
