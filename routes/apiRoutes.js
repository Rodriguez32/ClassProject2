var db = require("../models");
// var nodemailer = require("nodemailer");
require("dotenv").config();

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the users
  app.get("/api/users/", function(req, res) {
    db.Members.findAll({}).then(function(users) {
      res.json(users);
    });
  });

  // Get route for returning all contracts that you are a part of
  app.get("/api/contracts/:email", function(req, res) {
    db.Contracts.findAll({
      where: {
        creator_id: req.params.email,
        receiver_id: req.params.email
      }
    }).then(function(myContracts) {
      res.json(myContracts);
    });
  });

  // POST route for adding a new user
  app.post("/api/users", function(req, res) {
    console.log("test");
    db.Members.create({
      user_name: req.body.user_name,
      email: req.body.email
    }).then(function(newUser) {
      res.json(newUser);
    });
  });

  // POST route for adding a new contract
  app.post("/api/contracts", function(req, res) {
    console.log(req.body);
    db.Contracts.create({
      creator_id: req.body.creatoremail,
      receiver_id: req.body.contracteeEmail,
      title: req.body.title,
      type: req.body.type,
      offer: req.body.offer,
      extra: req.body.extra,
      signature: req.body.signature
    }).then(function(newContract) {
      res.json(newContract);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/contracts/:id", function(req, res) {
    db.User.destroy({
      where: {
        contract_id: req.params.id
      }
    }).then(function(contracts) {
      res.json(contracts);
    });
  });

  // PUT route for updating contracts when user accepts contract
  app.put("/api/contracts", function(req, res) {
    db.User.update(req.body, {
      where: {
        receiver_id: req.body.email
      }
    }).then(function(acceptedContract) {
      res.json(acceptedContract);
    });
  });

  // POST route for sending a contract to the user.
  app.post("/api/send", function(req, res) {
    console.log(req.body);
    console.log(res.body);
    // NON-FUNCTIONING EMAIL SERVER APP
    // var outputHtml =
    // `<h1> ${req.body.user} has sent you a contract! Here's what it's for
    // ${req.body.title}`
    // // This is the transport object taken from MailTrap for authentification.
    // var transport = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: process.env.mailTrap_USER,
    //     pass: process.env.mailTrap_PASSWORD
    //   }
    // });
    // // This is the message object that has the options for what gets sent in the email.
    // var message = {
    //   from: "trustus@gmail.com",
    //   to: req.body.contacteeEmail,
    //   subject: req.body.title,
    //   text: req.body.offer,
    //   replyTo: "trustus@gmail.com",
    //   html: outputHtml
    // };
    // // This method sends the email using the message object and catches for errors.
    // transport.sendMail(message, function(err, res) {
    //   if (err) {
    //     console.error("There was an error: ", err);
    //   } else {
    //     console.log("Here is the res: ", res);
    //     res.render("dashboard")
    //   }
    // });
  });
};
