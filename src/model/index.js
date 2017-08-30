const blogQuery = require('./queries');

module.exports = {
  getAllBlogs: blogQuery.getAll,
  getBlogById: blogQuery.getBlogById,
  getAdmins: blogQuery.getAdmins,
  postAddBlog: blogQuery.addBlog,
  postDeleteBlog: blogQuery.deleteBlog,
  postUpdateBlog: blogQuery.updateBlog
};
