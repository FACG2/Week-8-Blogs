const express = require('express');
const home = require('./home');
const blog = require('./blog');
const login = require('./login');

const router = express.Router();

router.get('/', home.get);
router.get('/blogs/:id', blog.get);
router.get('/login', login.get);

module.exports = router;
