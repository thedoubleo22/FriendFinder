// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

var app = express();

//Setting up Port, 8080 does not work for some reason so using 8000.
var PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listen for server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
