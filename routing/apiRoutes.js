const request = require("request");
const db = require("../models");
var isbn = require('node-isbn');

module.exports = function(app){
    app.post("/library", function(req, res){
        // grab the data ad req.body. whatever
        // req.body.value
        db.Library.create({
            title:"my first book"

        }).then(function(data){
            res.json(data);
        });
    });

    app.post("/for-sale", function(req, res){
        // grab the data ad req.body. whatever
        // req.body.value
        db.ForSale.create({
            title:"my first book"

        }).then(function(data){
            res.json(data);
        });
    });

    app.post("/wishlist", function(req, res){
        
        // req.body.value
        db.Wishlist.create({
            title:"my first book"

        }).then(function(data){
            res.json(data);
        });
    });
    
    app.get("/library", function(req, res){
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


   
