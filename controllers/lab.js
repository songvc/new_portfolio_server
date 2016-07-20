import User from '../models/user';
import Lab from '../models/lab';

const createLab = (req, res, next) => {
  console.log(req.body);
  // const { title, tags ,content } = req.body;

  //create an lab
  const lab = new Lab({
    title,
    tags,
    content
  });

  portfolio.saveAsync()
    .then(savedArticle => res.json(savedArticle))
    .error(e => next(e));
}

const deleteLab = (req, res, next) => {
  console.log(req.body);

}

const getLabs = (req, res, next) => {
  console.log(req.body);
  // allow pagination with limit and skip queries
  const { limit = 50, skip = 0 } = req.query;
  Lab.list({ limit, skip })
    .then(function(articles) {
      res.json(articles);
    })
    .catch(next)
    .error(console.error);
}

const getLab = (req, res, next, id) => {
  console.log(req.body);
  Lab.get(id)
    .then((lab) => {
      res.json(lab);
    })
    .error(console.error);
}

const updateLab = (req, res, next) => {
  console.log(req.body);
  const lab = req.lab;
  const { title, tags ,content } = req.body;

  lab.saveAsync()
    .then((article) => res.json(lab))
    .error(console.error);

}
