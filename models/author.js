var mongoose = require('mongoose');

var authorSchema = { 
    nick: String,
    realname: String
};

module.exports = new mongoose.Schema(authorSchema);
module.exports.authorSchema = authorSchema;