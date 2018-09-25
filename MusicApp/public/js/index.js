//   const slider = document.querySelectorAll('.sidenav');
//   M.Sidenav.init(slider, {
//     indicators: false,
//     height:500,
//     transition:500,
//     interval: 6000

//   });

$(document).ready(function(){
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".slider").slider({
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });
});




// Get references to page elements
var $userName = $("#name");
var $email = $("#email");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var $createacc = $("#create_acc");
var $password = $("#password");
// The API object contains methods for each kind of request we'll make
var API = {
  newUser: function(userData) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(userData)
    });
  },
  newContract: function(contractData) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/contracts",
      data: JSON.stringify(contractData)
    });
  },
  getContracts: function(email) {
    return $.ajax({
      url: "api/contracts/" + email,
      type: "GET"
    });
  },
  updateContracts: function(data) {
    return $.ajax({
      type: "PUT",
      url: "api/contracts/",
      data: JSON.stringify(data)
    });
  },
  deleteContract: function(id) {
    return $.ajax({
      url: "api/contracts/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var createAccount = function(event) {
  event.preventDefault();

  var user = {
    email: $email.val().trim(),
    user_name: $userName.val().trim()
  };

  if (!(user.email && user.user_name)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.newUser(user);

  $email.val("");
  $userName.val("");
  $password.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$createacc.on("click", createAccount);;
$exampleList.on("click", ".delete", handleDeleteBtnClick);
