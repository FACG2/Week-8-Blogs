const dbConnec = require('./Database/db_connection.js');

function getAll (cb) {
  return dbConnec.query('SELECT * FROM blogs ORDER BY blog_date DESC;', (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
}

function getBlogById (id, cb) {
  dbConnec.query(
    {
      text: 'SELECT * FROM blogs WHERE id =$1',
      values: [id]
    }, (err, blog) => {
    if (err) cb(err);
    else cb(null, blog.rows);
  });
}

module.exports = {
  getAll,
  getBlogById
};
