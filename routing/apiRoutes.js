module.exports = function(app){
    var db = require("../models");
    var request= require("request");
    var isbn = require('node-isbn');
    app.get("/save", function(req, res){
        db.Book.create({
            title:"my first book"

        }).then(function(data){
            res.json(data);
        });
    })
    app.get("/getbooks", function(req, res){
        isbn.resolve('1400201659', function (err, book) {
            if (err) {
                console.log('Book not found', err);
            } else {
                console.log('Book found %j', book);
                res.json(book);
            }
        });
       
        })


}


   