const mongoose = require('mongoose');
// FIXME:
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: { type: String, required: true },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, {
    timestamps: true
})

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    bookImage: String,
    description: String,
    publishDate: Date,
    publisher: String,
    pages: Number,
    language: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);

