const {validateAdmin} = require('../model/index');

function get (req, res) {
  res.render('login', {title: 'Admin Page', cssPath: '/css/login.css'});
}

function post (req, res) {
  const data = {
    body: req.body
  };
  validateAdmin(data, (err, admin) => {
    if (err) {
      res.render('404');
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
