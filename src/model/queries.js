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

module.exports = {
  getAll
};
