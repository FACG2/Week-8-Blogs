const blogQuery = require('../Database/queries.js');
module.exports = {
  blogAllBlogs: blogQuery.getAll
};
