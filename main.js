var express             = require("express");
var cors                = require("utils/cors");
var pillarNewspaperRest = require("services/pillarNewspaperRest");

// App instance
var app = express();

// Support JSON bodies
app.use(express.json());

// Enable cors
cors(app);

// Setup Rest interfaces
pillarNewspaperRest(app);

var server = app.listen(Number(process.env.PORT || 4646), function() {
  console.log("Listening on port %d", server.address().port);
});
