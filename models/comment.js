var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    content: String,
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
    }
});