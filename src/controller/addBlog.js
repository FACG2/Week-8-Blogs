const queries = require('../model/queries');

function get (req, res) {
  res.render('add-blog', {title: 'Add Blog', cssPath: '/css/add_blog.css'});
}

function post (req, res) {
  queries.addBlog(req, (err, result) => {
    if (err) {
      res.redirect('/404');
    } else {
      res.redirect('/');
    }
  });
}

module.exports = {
  get,
  post
};
