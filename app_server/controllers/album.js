var keys = require('../routes/keys');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotifyKeys);

let albumGetResults = (req, res, next) => {
  var type = req.body.type;

  console.log(type);
  var plural = type +  's';
  results = [];
  spotify.search({ type: 'track', query: type, limit: 20 }, function (err, data) {
    if (err) {
      console.log('Error occured: ' + err);
      return err;
    } else {
      data.tracks.items.forEach(function (ea) {
          results.push({ artist: ea.artists[0].name,
                        album: ea.album.images[2].url,
                        album_name: ea.album.name,
                        release_date: ea.album.release_date,
                        name: ea.name,
                        artistPage: ea.artists[0].external_urls.spotify,

                      });

        });

              return res
                .status(201)
                .render('albums', { results: results });
    }
  });
};

module.exports = {
  albumGetResults,
};
