const albumInfo = (req, res) => {
  res.render('index', {title: 'Album Info'});
};

module.exports = {
  albumInfo
};
