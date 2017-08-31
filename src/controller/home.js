const {getAllBlogs} = require('../model/index');

function get (req, res, next) {
  getAllBlogs((err, blogs) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {blogs, title: 'Blogs', cssPath: '/css/home.css'});
    }
  });
}

module.exports = {
  get
};
