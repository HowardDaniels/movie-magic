
var db = require("../models");
// var movieSearch= require("./movie-search");
$(document).ready(function() {
  // GET requests and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
 $(".member-name").text(data.username);
  });
});




// db.User.findOne({
//   where: {
//     username: username
//   }
// }).then(function(dbUser) {
//   // If there's no user with the given email
//   if (!dbUser) {
//     return done(null, false, {
//       message: "Incorrect username."
//     });