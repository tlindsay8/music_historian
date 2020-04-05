const index = (req, res) => {
  res.render('index', {title: 'Music Historian: Know what you hear'});
};

module.exports = {
  index
};
