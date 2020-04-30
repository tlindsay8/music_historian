var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlAlbum = require('../controllers/album');

/* GET home page. */
router.get('/', ctrlMain.index);
// Call album results when post request is sent
router.post('/', ctrlAlbum.albumGetResults);

module.exports = router;
