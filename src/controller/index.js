const express = require('express');
const home = require('./home');
const blog = require('./blog');

const router = express.Router();

router.get('/', home.get);
router.get('/:id', blog.get);

module.exports = router;
