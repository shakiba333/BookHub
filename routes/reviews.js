var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/books/:id/reviews', reviewsCtrl.create);
module.exports = router;