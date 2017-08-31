const queries = require('../model/queries');

function get (req, res) {
  res.render('add-blog', {title: 'Add Blog', cssPath: '/css/add_blog.css'});
}

function post (req, res, next) {
  const data = {
    body: req.body
  };

  queries.addBlog(data, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/admin');
    }
  });
}

module.exports = {
  get,
  post
};
