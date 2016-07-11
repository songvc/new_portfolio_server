const User = require('../models/user');
const Article = require('../models/article');
const config = require('../config');

exports.createArticle = function(req, res) {
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

exports.deleteArticle = function (req, res) {

}

exports.getArticles = function (req, res) {

}

exports.getArticle = function (req, res) {

}

exports.updateArticle = function (req, res) {
  console.log(req.body);
  const { id } = req.body.params;
  // update an existing article
  Article.findById(id, function(err, article) {
    const { title, tags ,text } = req.body;

  })

}
