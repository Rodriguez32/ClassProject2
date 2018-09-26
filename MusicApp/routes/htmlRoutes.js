var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/createaccount", function(req, res) {
    res.render("createaccount");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/test", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/dashboard/:email", function(req, res) {
    db.Contracts.findAll({
      where: {
        creator_id: req.params.email
      }
    }).then(function(myContracts) {
      console.log(myContracts[0].dataValues.contract_id);
      res.render("dashboard", {
        myContracts: myContracts
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
