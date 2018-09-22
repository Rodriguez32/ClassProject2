var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the users
  app.get("/api/users/", function(req, res) {
    db.user.findAll({}).then(function(users) {
      res.json(users);
    });
  });

  // Get route for returning all contracts that you are a part of
  app.get("/api/contracts/:email", function(req, res) {
    db.contracts
      .findAll({
        where: {
          creator_id: req.params.email,
          receiver_id: req.params.email
        }
      })
      .then(function(myContracts) {
        res.json(myContracts);
      });
  });

  // POST route for adding a new user
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.user
      .create({
        user_name: req.body.user_name,
        email: req.body.email
      })
      .then(function(newUser) {
        res.json(newUser);
      });
  });

  // POST route for adding a new contract
  app.post("/api/contracts", function(req, res) {
    console.log(req.body);
    db.contracts
      .create({
        creator_id: req.body.creator_email,
        receiver_id: req.body.receiver_email,
        contract_text: req.body.text
      })
      .then(function(newContract) {
        res.json(newContract);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/contracts/:id", function(req, res) {
    db.user
      .destroy({
        where: {
          contract_id: req.params.id
        }
      })
      .then(function(contracts) {
        res.json(contracts);
      });
  });

  // PUT route for updating contracts when user accepts contract
  app.put("/api/contracts", function(req, res) {
    db.user
      .update(req.body, {
        where: {
          receiver_id: req.body.email
        }
      })
      .then(function(acceptedContract) {
        res.json(acceptedContract);
      });
  });
};
