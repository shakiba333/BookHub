var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');
router.get('/new', booksCtrl.new);
router.get('/', booksCtrl.index);
router.get('/:id', booksCtrl.show);
router.post('/', booksCtrl.create);
module.exports = router;
