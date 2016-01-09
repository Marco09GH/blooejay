var mongoose = require('mongoose');
var Author = require('./author');

module.exports = new mongoose.Schema({
    img: { data: Buffer, contentType: String},
    title: {type: String, required: true},
    description: String,
    dates: { posted: Date, taken: Date, updated: Date},
    author: Author.authorSchema
});