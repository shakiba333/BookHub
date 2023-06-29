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
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    bookImage: { type: String, required: true },
    description: { type: String, required: true },
    publishDate: { type: Date, required: true },
    publisher: { type: String, required: true },
    pages: { type: Number, required: true },
    language: { type: String, required: true },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);

