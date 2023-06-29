var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');
router.get('/new', booksCtrl.new);
router.post('/search', booksCtrl.search);
router.get('/', booksCtrl.index);
router.get('/:id', booksCtrl.show);
router.get('/edit/:id', booksCtrl.edit);

router.post('/', booksCtrl.create);
router.put('/:id', booksCtrl.update);
router.delete('/:id', booksCtrl.delete);
module.exports = router;
