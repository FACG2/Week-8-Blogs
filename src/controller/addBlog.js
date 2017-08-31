const queries = require('../model/queries');

function get (req, res) {
  res.render('add-blog', {title: 'Add Blog', cssPath: '/css/add_blog.css'});
}

function post (req, res) {
  const data = {
    body: req.body
  };

  queries.addBlog(data, (err, result) => {
    if (err) {
      res.redirect('/404');
    } else {
      res.redirect('/admin');
    }
  });
}

module.exports = {
  get,
  post
};
