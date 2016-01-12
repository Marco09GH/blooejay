var mongoose = require('mongoose');
var Author = require('./author');

var imageSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    title: { type: String, required: true },
    description: String,
    dates: { posted: Date, taken: Date, updated: Date },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    albums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }]
});

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;