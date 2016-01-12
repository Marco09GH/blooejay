var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    images: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'       
    }]

});

var Album = mongoose.model('Album', albumSchema);

module.exports = Album;
