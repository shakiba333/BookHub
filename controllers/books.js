const Book = require('../models/book');
module.exports = {
    new: newBook,
    create,
    index,
    show
};
function newBook(req, res) {
    res.render('books/new', { errorMsg: '' });
}
async function create(req, res) {
    try {
        await Book.create(req.body);
        res.redirect('/books');
    } catch (err) {
        console.log(err);
        res.render('books/new', { errorMsg: err.message });
    }
}
async function index(req, res) {
    try {
        const books = await Book.find({});
        res.render('books/index', {
            books,
            errorMsg: ''
        })
    } catch (err) {
        res.render(`/books/index`, { errorMsg: err.message });
    }
}
async function show(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        res.render('books/show', {
            book,
            errorMsg: ''
        })
    } catch (err) {
        res.render(`/books/show`, { errorMsg: err.message });
    }
}