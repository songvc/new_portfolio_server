import authentication from './controllers/Authentication';
import article from './controllers/article';
import httpStatus from 'http-status';

import passportService from './services/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const routes = (app) => {
  app.get('/', requireAuth, function(req, res) {
    res.json({
      'message': 'wow'
    }, HTTPStatus[401]);
  })
  app.post('/signin', requireSignin, authentication.signin);
  app.post('/signup', authentication.signup);

  //REST API ROUTES FOR ARTICLES
  app.all('/api/*', requireAuth, (req, res, next) => {
    console.log('**** Private ****');
  });
  app.post('/api/articles', article.createArticle);
  app.get('/api/articles', article.getArticles);
  app.get('/api/articles/:id', article.getArticle);
  app.put('/api/articles/:id', article.updateArticle);
  app.delete('/api/articles/:id', article.deleteArticle);

}

export default routes;
