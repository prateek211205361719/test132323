
var passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google',  passport.authenticate('google', { scope: ['profile'] }));
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
          //res.send('login successfully');
          res.redirect('/surveys');
    });
    app.get('/api/currentuser', (req, res) => {
        res.send(req.user);
    })
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })
}

  