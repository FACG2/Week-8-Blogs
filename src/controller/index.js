const express = require('express');
const home = require('./home');
const blog = require('./blog');
const login = require('./login');
const notFound = require('./404');
const admin = require('./admin');
const addBlog = require('./addBlog');

const router = express.Router();

router.get('/', home.get);
router.get('/blogs/add', addBlog.get);
router.post('/blogs/add', addBlog.post);
router.get('/blogs/:id/edit', blog.getEditBlog);
router.post('/blogs/:id', blog.post);
router.get('/blogs/:id/delete', blog.deleteBlogById);
router.get('/blogs/:id', blog.get);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/admin', admin.get);
router.get('/logout', login.logout);
router.get('*', notFound.get);

module.exports = router;
