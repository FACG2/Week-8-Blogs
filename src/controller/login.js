const {validateAdmin} = require('../model/index');

function get (req, res) {
  res.render('login', {title: 'Admin Page', cssPath: '/css/login.css'});
}

function post (req, res, next) {
  const data = {
    body: req.body
  };
  validateAdmin(data, (err, admin) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/admin');
    }
  });
}

function logout (req, res) {
  res.redirect('/');
}

module.exports = {
  get,
  post,
  logout
};
