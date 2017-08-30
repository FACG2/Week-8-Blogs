const {getAllBlogs} = require('../model/index');

function get (req, res) {
  getAllBlogs((err, blogs) => {
    if (err) {
      res.render('404');
    } else {
      res.render('login', {blogs, title: 'login', cssPath: '/css/login.css'});
    }
  });
}

module.exports = {
  get
};
