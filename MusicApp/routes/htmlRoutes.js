var db = require("../models");

//var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Create Account page
  app.get("/createaccount", function(req, res) {
    res.render("createaccount");
  });

  // Login page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Test page
  app.get("/test", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Dashboard Page
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Create Contract Page
  app.get("/contract-form", function(req, res) {
    res.render("contract-form");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
