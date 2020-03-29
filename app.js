//let express = express();
//let app = express();
//let port = 8080;
let request = require("request");

//app.listen(8080);
let clientID = "d56f39a8e41f4fd18cc3059344f8b825";
request('https://api.spotify.com/v1/album/Lost', function (error, response, body) {
  console.error('error: ', error);
  console.log('statusCode: ', response && response.statusCode);
  console.log('body: ', body);
});
// TODO: Send a GET Request to Spotify api
/*
app.get('/', function(req, res){
})
*/
//// TODO: Run a POST Request from Spotify api
