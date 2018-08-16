var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./models");
// var isbn = require('node-isbn');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(express.static("public"));

// isbn.resolve('1400201659', function (err, book) {
//     if (err) {
//         console.log('Book not found', err);
//     } else {
//         console.log('Book found %j', book);
//     }
// });
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
 




require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log(db);
      console.log("App listening on PORT " + PORT);
    });
  });
  
  

