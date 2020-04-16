var keys = require('../routes/keys');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotifyKeys);

const albumInfo = (req, res) => {
  res.render('index', { title: 'Spotify Music Results' });
};

let albumGetResults = (req, res, next) => {
  var type = req.body.type;

  console.log(type);
  results = [];
  var plural = type +  's';
  spotify.search({ type: 'album', query: type, limit: 5 }, function (err, data) {
    if (err) {
      console.log('Error occured' + err);
    } else {

      data.albums.items.forEach(function (ea) {
          results.push({ artist: ea.artists[0].name,
                        album: ea.images[2],
                        release_date: ea.release_date,
                        name: ea.name,

                      });
          return res
                .status(200)
                .render('albums', { results: results });
        });

    }
  });

};

/*
let returnAlbumInfo = (req, res) => {
  var results = albumGetResults();
  console.log(reults);

};
*/

module.exports = {
  albumInfo,
  albumGetResults,
};
