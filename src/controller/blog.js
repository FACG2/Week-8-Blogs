const {getBlogById} = require('../model/queries');

function get (req, res) {
  // console.log(req.body);
  getBlogById(req.params.id, (err, blog) => {
    if (err) {
      console.log(err);
      res.render('404');
    } else {
      res.render('blog', {blog: blog[0], title: blog[0].title, cssPath: '/css/index.css'});
    }
  });
}

module.exports = {
  get
};
