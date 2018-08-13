var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var db = require("./models");

var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({ type: 'application/*+json' }))
 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 

app.use(bodyParser.text({ type: 'text/html' }))

app.use(express.static("public"));

 require("./routing/htmlRoutes.js")(app);
 require("./routing/apiRoutes.js")(app);





db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  