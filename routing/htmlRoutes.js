
module.exports = function(app){
    var path = require("path");

    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    
};