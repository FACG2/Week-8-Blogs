
function get (req, res) {
  res.render('admin', {title: 'Admin Page', cssPath: '/css/index.css'});
}

module.exports = {
  get
};
