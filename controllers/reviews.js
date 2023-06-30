const Book = require('../models/book');
module.exports = {
    create,
    delete: deleteReview
};

async function create(req, res) {
    const review = await Book.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    review.reviews.push(req.body)
    try {
        await review.save();
    } catch (err) {
        console.log(err);
        // res.render('books/new', { errorMsg: err.message });
    }
    res.redirect(`/books/${review.id}`)
}

async function deleteReview(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    const deleteUserReview = await Book.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    // Rogue user!
    if (!deleteUserReview) return res.redirect('/books');
    // Remove the review using the remove method available on Mongoose arrays
    deleteUserReview.reviews.remove(req.params.id);
    // Save the updated movie doc
    await deleteUserReview.save();
    // Redirect back to the movie's show view
    res.redirect(`/books/${deleteUserReview._id}`);
}
