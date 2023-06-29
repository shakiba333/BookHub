var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');
const ensureLoggedIn = require('../config/ensureLoggedIn');
router.get('/new', ensureLoggedIn, booksCtrl.new);
router.post('/search', booksCtrl.search);
router.get('/', booksCtrl.index);
router.get('/admin', booksCtrl.admin);
router.get('/:id', booksCtrl.show);
router.get('/edit/:id', ensureLoggedIn, booksCtrl.edit);

router.post('/', ensureLoggedIn, booksCtrl.create);
router.put('/:id', ensureLoggedIn, booksCtrl.update);
router.delete('/:id', ensureLoggedIn, booksCtrl.delete);
module.exports = router;
