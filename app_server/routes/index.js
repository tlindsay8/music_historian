var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlAlbum = require('../controllers/album');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/album', ctrlAlbum.albumInfo);
router.post('/album', ctrlAlbum.albumGetResults);

module.exports = router;
