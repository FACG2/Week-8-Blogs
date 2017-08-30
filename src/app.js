const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const controller = require('./controller/index');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const helpers = require('./views/helpers/index');

const app = express();

app.use(express.static('public'));

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helpers
  })
);

app.set('port', process.env.PORT || 3000);
app.use(controller);

module.exports = app;
