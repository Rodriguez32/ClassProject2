require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var passport = require("passport");
// var session = require("express-session");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(
//   session({
//     secret: "secret",
//     saveUninitialized: true,
//     resave: true
//   })
// ); //Session Secret

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// require("./routes/auth.js")(app, passport);
// require("./config/passport.js")(passport, db.user);
// require("./public/js/contractpdf");

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

// app.use(
//   session({
//     secret: "secret",
//     saveUninitialized: true,
//     resave: true
//   })
// );
