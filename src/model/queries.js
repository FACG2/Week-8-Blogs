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

function getAdmins (name, password, cb) {
  dbConnec.query('SELECT * FROM admins', (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res.rows);
  });
}

function addBlog (req, cb) {
  dbConnec.query('SELECT id FROM admins', (err, response) => {
    if (err) {
      return cb(err);
    }
    const id = response.rows[0].id;
    const query = `INSERT INTO blogs(title, contents, img_url , admin_id)
      VALUES (${req.body.title}','${req.body.contents}',${req.body.img_url} , ${id})`;
    dbConnec.query(query, (err, response) => {
      if (err) {
        return cb(err);
      }
      cb(null, response);
    });
  });
}

function deleteBlog (req, cb) {
  dbConnec.query(`DELETE FROM blogs WHERE blog_id = ${req.body.id}`, (err, resp) => {
    if (err) {
      return cb(err);
    }
    cb(null, resp);
  });
}

function updateBlog (req, cb) {
  dbConnec.query(`UPDATE blogs SET title =${req.body.title} AND contents =${req.body.contents} AND img_url =${req.body.img_url} WHERE id = ${req.body.id} `, (err, dbRes) => {
    if (err) {
      return cb(err);
    }
    cb(null, dbRes);
  });
}

module.exports = {
  getAll,
  getBlogById,
  getAdmins,
  addBlog,
  deleteBlog,
  updateBlog
};
