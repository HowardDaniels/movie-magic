
var movieSearch= require("./movie-search");
$(document).ready(function() {
  // GET requests and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    var myUserName=req.params.user_data;


    $(".member-name").text(data.username);
  });
});
