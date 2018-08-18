const path = require("path");

module.exports = function(app){
    

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/html/home.html"));
    });

    app.get("/library", function(req, res){
        res.sendFile(path.join(__dirname, "../public/html/library.html"));
    });

    app.get("/wishlist", function(req, res){
        res.sendFile(path.join(__dirname, "../public/html/wishlist.html"));
    });

    app.get("/for-sale", function(req, res){
        res.sendFile(path.join(__dirname, "../public/html/for-sale.html"));
    });

};