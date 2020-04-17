var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlAlbum = require('../controllers/album');

/* GET home page. */
router.get('/', ctrlMain.index);
router.post('/', ctrlAlbum.albumGetResults);

module.exports = router;
