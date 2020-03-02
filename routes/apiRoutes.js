var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

// USE users_db;

// var users = require("../users.json");

// app.get("/api/users", function(req, res) {
// res.json(users);
// }

// module.exports = function(app) {
//   app.get("/api/users", function(req, res) {
//   res.json(users);
//   });

//   app.post("/api/users", function(req, res) {
//       notes.push(req.body);
// req.body.id = users.length;
// var username = "";
// “username” += (req.body.id).toString();
//       fs.writeFile(“users.json", JSON.stringify(users), function(err) {
//         if (err) {
//           throw err;
//         }
//       });

//       res.json(true);
// var buddies = [];
// buddies.push[{username: username}, {points: 0}] for all usernames;

// //Same favorite movie: 20 pts
// Same 2nd favorite movie: 15 pts
// Same 3rd favorite movie: 10 pts
// Same favorite actor: 9 pts
// Same 2nd favorite actor: 8 pts
// Same 3rd favorite actor: 7 pts
// Same favorite director: 6 pts
// Same 2nd favorite director: 5 pts
// Same 3rd favorite director: 4 pts
// Same favorite genre: 3 pts
// Same 2nd favorite genre: 2 pts
// Same 3rd favorite genre: 1 pt

// SELECT username FROM users_db WHERE favoriteMovie = users[users.length].favoriteMovie;
// for each of these usernames, buddies[i].points += 20;
// SELECT username FROM users_db WHERE favoriteMovie2 = users[users.length].favoriteMovie2;
// for each of these usernames, buddies[i].points += 15;
// SELECT username FROM users_db WHERE favoriteMovie3 = users[users.length].favoriteMovie3;
// for each of these usernames, buddies[i].points += 10;
// SELECT username FROM users_db WHERE favoriteActor = users[users.length].favoriteActor;
// for each of these usernames, buddies[i].points += 9;
// SELECT username FROM users_db WHERE favoriteActor2 = users[users.length].favoriteActor2;
// for each of these usernames, buddies[i].points += 8;
// SELECT username FROM users_db WHERE favoriteActor3 = users[users.length].favoriteActor3;
// for each of these usernames, buddies[i].points += 7;
// SELECT username FROM users_db WHERE favoriteDirector = users[users.length].favoriteDirector;
// for each of these usernames, buddies[i].points += 7;
// });