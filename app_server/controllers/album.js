var keys = require('../routes/keys');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotifyKeys);

let albumGetResults = (req, res, next) => {
  //receive data from the form
  var type = req.body.type;

  //Create array to hold results of search
  results = [];

  //Spotify search request
  spotify.search({ type: 'track', query: type, limit: 20 }, function (err, data) {
    //Error checking
    if (err) {
      console.log('Error occured: ' + err);
      return err;
    } else {
      //Loops through returned data and places info in results array
      data.tracks.items.forEach(function (ea) {
          results.push({ artist: ea.artists[0].name,
                        album: ea.album.images[2].url,
                        album_name: ea.album.name,
                        release_date: ea.album.release_date,
                        name: ea.name,
                        artistPage: ea.artists[0].external_urls.spotify,

                      });

        });

              //Renders web page with results in a table
              return res
                .status(201)
                .render('albums', { results: results });
    }
  });
};
//export the function
module.exports = {
  albumGetResults,
};
