const request = require("request");
const db = require("../models");
var isbn = require('node-isbn');

module.exports = function(app){
    app.get("/save", function(req, res){
        db.Book.create({
            title:"my first book"

        }).then(function(data){
            res.json(data);
        });
    });
    
    app.get("/getbooks", function(req, res){
        isbn.resolve('1400201659', function (err, book) {
            if (err) {
                console.log('Book not found', err);
            } else {
                console.log('Book found %j', book);
                res.json(book);
            }
        });
    });
            app.post("/getbooksbytitle", function(req, res){
                console.log("req.body", req.body);
            })
};


   
