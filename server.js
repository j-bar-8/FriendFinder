// DEPENDENCIES
// =====================================================
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS
// =====================================================
var app = express();
var PORT = process.env.PORT || 8080
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTING
// =====================================================
// require("./routing/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// LISTENER
// =====================================================
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});