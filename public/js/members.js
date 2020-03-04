$(document).ready(function() {
  // GET requests and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.username);
  });
});
