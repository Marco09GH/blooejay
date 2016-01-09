var restify = require('restify');
var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/video', function (err, db) {
    var server = restify.createServer();
    
});