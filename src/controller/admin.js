const {getAllBlogs} = require('../model/index');

function get (req, res) {
  getAllBlogs((err, blogs) => {
    if (err) {
      res.render('404');
    } else {
      res.render('admin', {blogs, title: 'Admin Page', cssPath: '/css/home.css'});
    }
  });
}

module.exports = {
  get
};
