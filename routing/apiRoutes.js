const request = require("request");
const db = require("../models");
var isbn = require('node-isbn');

module.exports = function(app){

    app.post("/new-user", function(req, res) {
        console.log("Request: " + JSON.stringify(req.body));
        db.Users.create(
            req.body
        ).then(function(data){
            res.json(data);
        });
    });

    app.post("/returning-user/", function(req, res) {
        console.log("Request: " + JSON.stringify(req.body)); 
        db.Users.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(function(data){
            res.json(data);
        });
    });

    app.get('/books/:isbn', function(req, res) {
        var isbnNumber = req.params.isbn;
        isbn.resolve(isbnNumber, function (err, book) {
            if (err) {
                console.log('Book not found', err);
            } else {
                res.json(book);
            }
        });
    });

    app.post("/add-to-library", function(req, res){
        db.Library.create({
            ISBN: req.body.ISBN,
            Title: req.body.Title,
            Author: req.body.Author,
            UserId: req.body.UserId
        }).then(function(data){
            res.json(data);
        });
    });

    
    app.post("/wishlist", function(req, res){
        db.Wishlist.create(req.body).then(function(data){
            res.json(data);
        });
    });
    
    app.post("/for-sale", function(req, res){
        db.forsale.create(req.body).then(function(data){
            res.json(data);
        });
    });

    app.get("/library/:user_id", function(req, res) {
        var userID = req.params.user_id;
        db.Library.findAll({
            where: {
                UserId: userID
            }
        }).then(function(data){
            res.json(data);
            
        });
    });

    app.get("/wishlist/:user_id", function(req, res) {
        var userID = req.params.user_id;
        db.Wishlist.findAll({
            where: {
                UserId: userID
            }
        }).then(function(data){
            res.json(data);
            
        });
    });

    app.get("/for-sale/:user_id", function(req, res) {
        var userID = req.params.user_id;
        db.forsale.findAll({
            where: {
                UserId: userID
            }
        }).then(function(data){
            res.json(data);
        });
    });

    app.delete("/library-delete/:bookId", function( req, res) {
        db.Library.destroy({
            where: {
              id: req.params.bookId
            }
        }).then(function(data) {
        res.json(data);
        });
      
    });

    app.delete("/wishlist-delete/:bookId", function( req, res) {
        db.Wishlist.destroy({
            where: {
              id: req.params.bookId
            }
        }).then(function(data) {
        res.json(data);
        });
      
    });
      
    app.delete("/forSale-delete/:bookId", function(req, res) {
        db.forsale.destroy({
            where: {
              id: req.params.bookId
            }
        }).then(function(data) {
        res.json(data);
        });
      
    });

    app.put("/wishlist-update/:bookId", function(req, res) {
        console.log(req.body);
        db.Wishlist.update({
            Max_Price: req.body.price
        }, {
            where: {
                id: req.params.bookId
            }
        }).then(function(data) {
            res.json(data);
        });
    });

    app.put("/forSale-update/:bookId", function(req, res) {
        console.log(req.body);
        db.forsale.update({
            Min_Price: req.body.price
        }, {
            where: {
                id: req.params.bookId
            }
        }).then(function(data) {
            res.json(data);
        });
    });

    app.get("/for-sale/isbn/:selectedBookIsbn/price/:minPrice", function(req, res) {
        console.log("in route!!!!!!!!!!!!")
        var targetIsbn = req.params.selectedBookIsbn;
        console.log("TARGET ISBN: ", targetIsbn);
        var minPrice = req.params.minPrice;

        // Max_Price: {
        //     [Op.gte]: minPrice
        // }

        db.Users.findAll({
            include: [{
                model: db.Wishlist,
                    where: { ISBN: targetIsbn }                  
            }]
            
        }).then(function(data){
            res.json(data);
        });
    });

    app.get("/wishlist/isbn/:selectedBookIsbn/price/:maxPrice", function(req, res) {
        var targetIsbn = req.params.selectedBookIsbn;
        console.log("TARGET ISBN: ", targetIsbn);
        var maxPrice = req.params.maxPrice;
        db.Users.findAll({
            include: [{
                model: db.Wishlist,
                    where: { ISBN: targetIsbn }                  
            }]
            
        }).then(function(data){
            res.json(data);
        });
            
    });
};

// var filtered = [];
//     console.log("DATA FROM LINE 173: ", data)
//     console.log("TYPE OF!!!!!!!!!!!",typeof data)
//     for(var key in data){
//         if(data.hasOwnProperty(key)){
//         var value = data[key]
//         filtered.push(value)
        
//         }
//     }
//     console.log("VALUE: ",filtered);
   
// db.Wishlist.findAll({
    //     where: {
    //         ISBN: targetIsbn,
    //         Max_Price: {
    //             [Op.gte]: minPrice
    //         }
    //     }

//db.Wishlist.belongsToMany(Users, { through: 'Buyers', foreignKey: 'UserId' })

//Where the isbn associated with the book id that was clicked  book.
//Is the same as the isbn of any entry in the wishlist table
//AND the min price of the clicked id is less than or equal to
//the max price of the isbn on the wishlist row(s),
//return all usernames and emails from User foreign key on wishlist that fit those criteria