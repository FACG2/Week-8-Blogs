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
  dbConnec.query({
    text: `SELECT * FROM admin WHERE name=$1 AND password=$2`,
    values: [name, password]
  }, (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res.rows);
  });
}

function addBlog (req, cb) {
  dbConnec.query({
    text: `SELECT * FROM admins WHERE name=$1`,
    values: [req.body.name]
  }, (err, admin) => {
    if (err) {
      cb(err);
    } else {
      const query = `INSERT INTO blogs(title, contents, img_url , admin_id)
      VALUES ($1,$2,$3,$4);`;
      dbConnec.query({
        text: query,
        values: [req.body.title, req.body.contents, req.body.img_url, admin.rows[0].id]
      }, (err1, response) => {
        if (err1) {
          return cb(err1);
        }
        cb(null, response.rows);
      });
    }
  });
}

function deleteBlog (req, cb) {
  dbConnec.query({
    text: `DELETE FROM blogs WHERE blog_id = $1`,
    values: [req.body.id]
  }, (err, resp) => {
    if (err) {
      return cb(err);
    }
    cb(null, resp);
  });
}

function updateBlog (req, cb) {
  dbConnec.query({
    text: `UPDATE blogs SET title =$1 AND contents =$2 AND img_url =$3 WHERE id = $4 `,
    values: [req.body.title, req.body.contents, req.body.img_url, req.body.id]
  }, (err, dbRes) => {
    if (err) {
      return cb(err);
    }
    cb(null, dbRes);
  });
}

function validateAdmin (req, callback) {
  dbConnec.query({
    text: `SELECT name ,password FROM admins WHERE name =$1 AND password =$2`,
    values: [req.body.name, req.body.password]
  }, (err, res) => {
    if (err) {
      return callback(err);
    }
    callback(null, res.rows);
  });
}

module.exports = {
  getAll,
  getBlogById,
  getAdmins,
  addBlog,
  deleteBlog,
  updateBlog,
  validateAdmin
};
