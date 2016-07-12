import User from '../models/user';
import Article from '../models/article';
import config from '../config';

function createArticle(req, res) {
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

function deleteArticle(req, res) {

}

function getArticles(req, res) {
  console.log(req.body);
  const { limit = 50, skip = 0 } = req.query;
  Article.find({}, funciton (err, articles) {
    if (err) {
      return console.log(err);
    }
    res.fo
  })
}

function getArticle (req, res) {
  console.log(req.body);

}

function updateArticle (req, res) {
  console.log(req.body);
  const { id } = req.body.params;
  // update an existing article
  Article.findById(id, function(err, article) {
    const user =
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

export deafult { createArticle, deleteArticle, getArticles, getArticle, updateArticle };
