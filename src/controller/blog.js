const {getBlogById, updateBlog, deleteBlog} = require('../model/queries');

function get (req, res, next) {
  getBlogById(req.params.id, (err, blog) => {
    if (err) {
      next(err);
    } else {
      res.render('blog', {blog: blog[0], title: blog[0].title, cssPath: '/css/index.css'});
    }
  });
}

function getEditBlog (req, res, next) {
  getBlogById(req.params.id, (err, blog) => {
    if (err) {
      next(err);
    } else {
      res.render('editBlog', {blog: blog[0], title: 'Edit Blog', cssPath: '/css/add_blog.css'});
    }
  });
}

function post (req, res, next) {
  const data = {
    body: req.body,
    params: req.params
  };
  updateBlog(data, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/blogs/' + req.params.id);
    }
  });
}

function deleteBlogById (req, res, next) {
  const data = {
    body: req.body,
    params: req.params
  };

  deleteBlog(data, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/admin');
    }
  });
}

module.exports = {
  get,
  getEditBlog,
  post,
  deleteBlogById
};
