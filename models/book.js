const mongoose = require('mongoose');
// FIXME:
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    bookImage: String,
    publishDate: Date,
    publisher: String,
    pages: Number,
    language: String
}, {
    timestamps: true
});
module.exports = mongoose.model('Book', bookSchema);

