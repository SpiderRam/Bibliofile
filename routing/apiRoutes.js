module.exports = function(app){
    var db = require("../models");
    var request= require("request");

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
        