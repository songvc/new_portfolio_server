import User from '../models/user';
import Portfolio from '../models/portfolio';

const createPortfolio = (req, res, next) => {
  console.log(req.body);
  // const { title, tags ,content } = req.body;

  //create an article
  const portfolio = new Portfolio({
    title,
    tags,
    content
  });

  portfolio.saveAsync()
    .then(savedArticle => res.json(savedArticle))
    .error(e => next(e));
}

const deletePortfolio = (req, res, next) => {
  console.log(req.body);

}

const getPortfolios = (req, res, next) => {
  console.log(req.body);
  // allow pagination with limit and skip queries
  const { limit = 50, skip = 0 } = req.query;
  Portfolio.list({ limit, skip })
    .then(function(articles) {
      res.json(articles);
    })
    .catch(next)
    .error(console.error);
}

const getPortfolio = (req, res, next, id) => {
  console.log(req.body);
  Portfolio.get(id)
    .then((article) => {
      res.json(article);
    })
    .error(console.error);
}

const updatePortfolio = (req, res, next) => {
  console.log(req.body);
  const article = req.article;
  const { title, tags ,content } = req.body;

  portfolio.saveAsync()
    .then((article) => res.json(article))
    .error(console.error);

}
