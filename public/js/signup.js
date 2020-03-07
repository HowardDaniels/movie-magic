$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var usernameInput = $("input#username-input");

  // When the signup button is clicked, we validate username, email, and password
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.email || !userData.password) {
      return;
    }
    // If we have a username, email and password, run the signUpUser function
    signUpUser(userData.email, userData.username, userData.password);
    emailInput.val("");
    passwordInput.val("");
    usernameInput.val("");
  });

  // If successful, we are redirected to the members page

  function signUpUser(email, username, password) {
    $.post("/api/signup", {
      username: username,
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace("/login");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
