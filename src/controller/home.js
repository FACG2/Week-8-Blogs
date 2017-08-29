const {getAllBlogs} = require('../model/index');

function get (req, res) {
  getAllBlogs((err, blogs) => {
    if (err) {
      res.render('404');
    } else {
      res.render('home', {blogs});
    }
  });
}

module.exports = {
  get
};
