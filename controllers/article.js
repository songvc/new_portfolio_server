const User = require('../models/user');
const Article = require('../models/article');
const config = require('../config');

exports.createArticle = function(req, res, next) {
  console.log(req.body);
  const { title, tags ,text } = req.body;
  //create an article
  const article = new Article({
    title,
    tags,
    text
  });
}

exports.deleteArticle = function () {

}

exports.getArticles = function () {

}

exports.getArticle = function () {

}

exports.updateArticle = function () {

}
