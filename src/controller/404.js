function get (req, res) {
  res.render('404', {title: 'Page Not Found', cssPath: '/css/404.css'});
}

module.exports = {
  get
};
