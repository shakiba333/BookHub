const Book = require('../models/book');
module.exports = {
    create
};

async function create(req, res) {
    const review = await Book.findById(req.params.id);
    review.reviews.push(req.body)
    try {
        await review.save();
    } catch (err) {
        console.log(err);
        // res.render('books/new', { errorMsg: err.message });
    }
    res.redirect(`/books/${review.id}`)
}