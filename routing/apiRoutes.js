module.exports = function(app){
    var db = require("../models");
    var request= require("request");
<<<<<<< HEAD

    app.get("/home", function(req, res){
        
    });

    //Will need to add unique user id to these endpoints
    app.get("/for-sale", function(req, res){
      
        
    });

    app.get("/wishlist", function(req, res){
        
        
    });

    app.get("/library", function(req, res){
        
        
    });
        
};
   

// db.Book.create({
        //     title:"my first book"

        // }).then(function(data){
        //     res.json(data);
        // });
        
=======
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


   
>>>>>>> master
