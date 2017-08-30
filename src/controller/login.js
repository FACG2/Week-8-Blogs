const {getAdmins} = require('../model/index');
const {validateAdmin} = require('../model/index');

function get (req, res) {
  // getAdmins(req.body.name, req.body.password, (err, admins) => {
  //   if (err) {
  //     res.render('404');
  //   } else {
  //     res.render('login', {admins: admins.rows, title: 'login', cssPath: '/css/login.css'});
  //   }
  // });
  res.render('login', {title: 'Admin Page', cssPath: '/css/login.css'});
}

function post (req, res) {
  validateAdmin(req, (err, admin) => {
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
