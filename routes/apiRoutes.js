var db = require("../models");
var passport = require("../config/passport");
var movieSearch = require("../public/js/movie-search");
var buddySearch = require("../public/js/buddy-search")
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "e0g58615ouuxd4ls",

  // Your password
  password: "bva6gv2ax0zhrlyn",
  database: "bdzjm9wt2q1l3qxk"
});

module.exports = function(app) {

  // If the user has valid login credentials, send them to the members page. Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {

    res.render(req.user);
  });

  // Route for signing up a user.
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  })

  // app.post("/api/deploymovies/:id",function(req, res){
  //   var username=req.params.id;
  //    var movieResults=req.data.chosenMoviesArray;
  //    movieResults=JSON.stringify(movieResults);
  //  db.SeachMovieData.create({
  //    username:username,
  //    movieResults:movieResults})
  //    .then(function(result){res.json(result)})
  //    .catch(function(err) {
  //      res.status(401).json(err);

  //  }) 
  //  });
 
  // app.post("/api/deploybuddies/:id",function(req, res){
  //   var username=req.params.id
  //   var chosenbuddies=req.data.chosenBuddies;
  //   chosenbuddies=JSON.stringify(chosenbuddies);
  //   db.SeachBuddyData.create({
  //     username:username,
  //     movieREsults:chosenbuddies})
  //     .then(function(result){res.json(result)})
  //     .catch(function(err) {
  //       res.status(401).json(err);
 
  //   }) 
  //   });
  
    
  
  
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        username: req.user.username,
        movie_one:req.user.movie_one,
        movie_two:req.user.movie_two,
        movie_three:req.user.movie_three,
        actor_one:req.user.actor_one,
        actor_two:req.user.actor_two,
        actor_three:req.user.actor_three,
        director_one:req.user.director_one,
        director_two:req.user.director_two,
        director_three:req.user.director_three,
        genre_one:req.user.genre_one,
        genre_two:req.user.genre_two,
        genre_three:req.user.genre_three

        


      });
    }
  });

  // app.get("/api/userinformation/:id",function(req,res){
  //   var id=req.params.id
  //   console.log(id);
  //   db.Users.findOne({where:{username:id}}).then(function(data){ 
  //     res.json(data);

  //   })
   
  // });
  app.get("/api/movieSearchInfo/:id",function(req,res){
    var id=req.params.id;
   connection.query("SELECT * FROM SearchMovieData WHERE username=?",id,function(err,data){
     if(err) throw err;
     res.json(data);

   })

  })
  app.get("/api/buddySearchInfo/:id",function(req,res){
    var id=req.params.id;
   connection.query("SELECT * FROM SearchBuddyData WHERE username=?",id,function(err,data){
     if(err) throw err;
     res.json(data);

   })
  })

   

  app.post("/api/search/:id",function(req,res){
    var id=req.params.id;
    var numberofMovies=req.body.numberMovies;
    console.log(numberofMovies);
    movieSearch.movieSearch(id,numberofMovies);
     buddySearch.buddySearch(id);
})


   
  app.put("/api/submitUserInformation/:id", function(req, res){
    var id = req.params.id;
    console.log(id)
    db.User.update(
      {movie_one: req.body.movie_one,
        movie_two:req.body.movie_two,
        movie_three:req.body.movie_three,
        actor_one:req.body.actor_one,
        actor_two:req.body.actor_two,
        actor_three:req.body.actor_three,
        director_one:req.body.director_one,
        director_two:req.body.director_two,
        director_three:req.body.director_three,
        genre_one:req.body.genre_one,
        genre_two:req.body.genre_two,
        genre_three:req.body.genre_three},
      {where: {
        username:id
      }}
    )
    .then(function(data) {
      res.json(data)
    });
    
   })

   app.delete("/api/deleteSearch",function(req,res){
     connection.query("DELETE FROM SearchBuddyData",function(err,result){
      if(err) throw err;
      res.json(result);

     })

     connection.query("DELETE FROM SearchMovieData",function(err,result){
       if(err) throw err;
       res.json(result);
     })

   })
   
     
   
  /*
  //Saved tempalte data below
  // Get all examples
  app.get("/api/movies", function(req, res) {
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
  */
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
// for each of these usernames, buddies[i].points += 6;
// SELECT username FROM users_db WHERE favoriteDirector2 = users[users.length].favoriteDirector2;
// for each of these usernames, buddies[i].points += 5;
// SELECT username FROM users_db WHERE favoriteDirector3 = users[users.length].favoriteDirector3;
// for each of these usernames, buddies[i].points += 4;
// SELECT username FROM users_db WHERE favoriteGenre = users[users.length].favoriteGenre;
// for each of these usernames, buddies[i].points += 3;
// SELECT username FROM users_db WHERE favoriteGenre2 = users[users.length].favoriteGenre2;
// for each of these usernames, buddies[i].points += 2;
// SELECT username FROM users_db WHERE favoriteGenre3 = users[users.length].favoriteGenre3;
// for each of these usernames, buddies[i].points += 1;

// remove user from buddies array
// if (location provided) {
// order buddies by points and location
//}
// else {
// only order buddies by points
//}
// });
