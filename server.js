var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./models");
var isbn = require('node-isbn');
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

//Models
var models = require("./models");
//Routes
var authRoute = require('./routing/auth.js')(app);
 
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(express.static("public"));

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions


//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
 
  res.send('Welcome to Passport with Sequelize');

});
isbn.resolve('', function (err, book) {
    if (err) {
        console.log('Book not found', err);
    } else {
        console.log('Book found %j', book);
    }
});
// var express = require('express'),
//     app = express(),
//     http = require('http'),
//     server = http.createServer(app),
//     xmlparser = require('express-xml-bodyparser');
 
// // .. other middleware ... 
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(xmlparser());
// // ... other middleware ... 
 
// app.post('/receive-xml', function(req, res, next) {
 
//   // req.body contains the parsed xml
 
// });
 
// server.listen(1337);
 

//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);

// -----------------------------------------------------------------------
// DO NOT DO THIS UNLESS YOU REALLY MEAN IT, YOU CAN'T GET THIS DATA BACK!
//------------------------------------------------------------------------
// if you need to delete everything in the db and start again, here you can use:
// db.sequelize.sync({ force: true }).then(function() {
// -----------------------------------------------------------------------
// DO NOT DO THIS UNLESS YOU REALLY MEAN IT, YOU CAN'T GET THIS DATA BACK!
//------------------------------------------------------------------------

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      
      console.log(db);
      console.log("App listening on PORT " + PORT);
    });
  });
  
  

