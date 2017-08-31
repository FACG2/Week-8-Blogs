const {getAllBlogs} = require('../model/index');

function get (req, res, next) {
  getAllBlogs((err, blogs) => {
    if (err) {
      next(err);
    } else {
      res.render('admin', {blogs, title: 'Admin Page', cssPath: '/css/home.css'});
    }
  });
}

module.exports = {
  get
};
