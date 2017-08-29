const dbConnec = require('./db_connection.js');

var getAll = (cb) => {
  dbConnec.query('SELECT title, contents, img_url FROM blogs ORDER BY blog_date DESC;', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = {
  getAll
};
