const Book = require('../models/book');
module.exports = {
    new: newBook,
    create,
    index,
    show,
    edit,
    update,
    delete: deleteBook
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

async function edit(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        res.render('books/edit', {
            book,
            errorMsg: ''
        })
    } catch (err) {
        res.render(`/books/edit`, { errorMsg: err.message });
    }
}
async function update(req, res) {
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/books/' + req.params.id)
    } catch (err) {
        res.render(`/books/${req.params.id}/edit`, { errorMsg: err.message });

    }

}

async function deleteBook(req, res) {
    try {
        await Book.findByIdAndRemove(req.params.id);
        res.redirect('/books')
    } catch (err) {
        res.render('/books', { errorMsg: err.message });

    }
}