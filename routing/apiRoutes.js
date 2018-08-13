module.exports = function(app){
    var db = require("../models");
    var request= require("request");
    app.get("/save", function(req, res){
        db.Book.create({
            title:"my first book"

        }).then(function(data){
            res.json(data);
        });
    })
    app.get("/getbooks", function(req, res){
        request('http://www.omdbapi.com/?t=' + "Cars" + '&y=&plot=short&r=json', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    
        var jsonData = JSON.parse(body);
        console.log('Title:' + jsonData.Title);
        console.log('Year:' + jsonData.Year);
        console.log('Rated:' + jsonData.Rated);
        console.log('IMDB Rating:' + jsonData.imdbRating);
        console.log('Country:' + + jsonData.Country);
        console.log('Language:' + jsonData.Language);
        console.log('Plot:' + jsonData.Plot);
        console.log('Actors:' + jsonData.Actors);
        console.log('Rotten tomatoes rating:' + jsonData.tomatoRating);
        
    });
        })
}
   