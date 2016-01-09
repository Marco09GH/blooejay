var restify = require('restify');
var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/video', function (err, db) {
    var server = restify.createServer();
    server.get('/api/get_movies', function(req, res, next) {
        db.collection('movies').find({}).toArray(function(err, docs) {
            res.send(docs);
            next();
        });
    });
    
    server.listen(3000, function() {
       console.log('%s listening at %s', server.name, server.url); 
    });
});