const {getAdmins} = require('../model/index');
const {validateAdmin} = require('../model/index');
function get (req, res) {
  getAdmins((err, admins) => {
    if (err) {
      res.render('404');
    } else {
      res.render('login', {admins, title: 'login', cssPath: '/css/login.css'});
    }
  });
}

function post (req, res) {
  validateAdmin((err, admin) => {
    if (err) {
      res.render('404');
    } else {
      res.redirect('/login');
    }
  });
}

function post (req, res) {
  res.redirect('/admin');
}

module.exports = {
  get,
  post
};
