var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({ 
    nick: String,
    realname: String
});

var Author = mongoose.model('Author', authorSchema);

module.exports = Author; 
