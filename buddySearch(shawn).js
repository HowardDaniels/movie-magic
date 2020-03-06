// var db = require("../models");
var axios = require('axios').default;
var moment = require('moment');
var request = require('ajax-request');
var $ = require('jQuery')
var mysql = require("mysql");
// var inquirer = require("inquirer");
var cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "movie_magic_db"
});

var favMovies=[];
var favActors =[];
var favDirectors=[];
var favGenres=[];
var miscNames=[];
numberOfMovies=10
var MyUserName = "shawnwhy"
var buddyArray=[]



var buddySearchThree= function(){
    connection.query("SELECT * FROM users where username !=?",MyUserName,function(err, data){
        var users = data;
        console.log(users);
        for(var i=0; i< users.length; i++){
             var buddyScore=0;

            if(favMovies.indexOf(users[i].movie_one)>-1){
                buddyScore+=20;
            };
            if(favMovies.indexOf(users[i].movie_two)>-1){
                buddyScore+=15;
            };
            if(favMovies.indexOf(users[i].movie_three)>-1){
                buddyScore+=10;
            };
            if(favActors.indexOf(users[i].actor_one)>-1){
                buddyScore+=20;
            };
            if(favActors.indexOf(users[i].actor_two)>-1){
                buddyScore+=15;
            };
            if(favActors.indexOf(users[i].actor_three)>-1){
                buddyScore+=10;
            };
            if(favDirectors.indexOf(users[i].director_one)>-1){
                buddyScore+=20;
            }
            if(favDirectors.indexOf(users[i].director_two)>-1){
                buddyScore+=15;
            }
            if(favDirectors.indexOf(users[i].director_three)>-1){
                buddyScore+=10;
            }
            if(favGenres.indexOf(users[i].genre_one)>-1){
                buddyScore+=5;
            }
            if(favGenres.indexOf(users[i].genre_two)>-1){
                buddyScore+=4;
            }
            if(favGenres.indexOf(users[i].genre_three)>-1){
                buddyScore+=3;
            }
            var allNamesList=[];
            allNamesList.push(users[i].actor_one,users[i].actor_two,users[i].actor_three,users[i].director_one,users[i].director_two,users[i].director_three,);
            allNamesList.push(users[i].genre_one,users[i].genre_two,users[i].genre_three);
            console.log(allNamesList);

            if(miscNames.indexOf(allNamesList)>-1){
                buddyScore+=1;}
           
            console.log("score =" + buddyScore);
            var buddyObject={
                username:users[i].username,
                score:buddyScore
            }
            console.log(JSON.stringify(buddyObject));
            buddyArray.push(buddyObject);
        }
        setTimeout(function(){console.log(buddyArray)
            for (let i=1; i<buddyArray.length; i++){
                let j=i-1;
                let tmp = buddyArray[i];
                while(j>=0 && buddyArray[j].score < tmp.score){
                  // console.log("scores"+chosenMovies[j].movieScore +"otherscore"+tmp.movieScore)
                  buddyArray[j+1] = buddyArray[j];
                  j--
                }
                buddyArray[j+1]=tmp};
            buddyArray=buddyArray.splice(0,4);
            console.log( buddyArray);


            },1000);


            
      
        
        }
    )

}

var buddySearchTwo = function(){
   
    // favActors=favActors;
    // favDirectors=favDirectors;
    // favGenres=favGenres;
    // favmovies=favMovies;
    // miscNames=miscNames;
    //find the information pertaining to the user's favorite movies.
    //the information is then pushed into the miscnames array.
    for (var i=0; i<favMovies.length;i++){
    var queryURL=`http://www.omdbapi.com/?T=${favMovies[i]}&apikey=7e6191f4`;
    console.log(queryURL);
  
    axios.get(queryURL)
    .then(function(response){
    
      // if(response){
  
    var response=response.data;
   
      // console.log(response);
        var foundActors=response.Actors;
        var foundDirectors=response.Director;
        var foundGenre=response.Genre;
        var foundWriters=response.Writer;
  
        foundActors=foundActors.split(",");
        for(i=0; i<foundActors.length; i++){
         var temp = foundActors[i].trim(" ").replace(/ *\([^)]*\) */g, "");
         foundActors[i]=temp;
        };
        // console.log(foundActors);
        foundDirectors=foundDirectors.split(",");
        for(i=0; i<foundDirectors.length; i++){
         var temp = foundDirectors[i].trim(" ").replace(/ *\([^)]*\) */g, "");
         foundDirectors[i]=temp;
        };
        // console.log(foundDirectors);
        foundWriters=foundWriters.split(",");
        for(i=0; i<foundWriters.length; i++){
         var temp = foundWriters[i].trim(" ").replace(/ *\([^)]*\) */g, "");
         foundWriters[i]=temp;
        };
        // console.log(foundWriters);
          foundGenre=foundGenre.split(",");
          for(i=0; i<foundGenre.length; i++){
           var temp = foundGenre[i].trim(" ").replace(/ *\([^)]*\) */g, "");
           foundGenre[i]=temp;
          };
          // console.log(foundWriters);
          //pushing the random names into the misc array
          for(i=0; i<foundWriters.length; i++){
            miscNames.push(foundWriters[i])};
          for(i=0; i<foundActors.length; i++){
           miscNames.push(foundActors[i])};  
          for(i=0; i<foundDirectors.length; i++){
            miscNames.push(foundDirectors[i])};
          for(i=0; i<foundGenre.length; i++){
            miscNames.push(foundGenre[i])};
  
  
        
  
        
        
        // ;
    }
    
    ).catch(function(err){
      console.log("ERRRS"+err);})
      } setTimeout(function(){console.log(miscNames);
      console.log(favActors,favDirectors,favGenres,favMovies);
      buddySearchThree()},1000);
    
    
  }
  

var BuddySearchOne = function(){
    
    
    connection.query("SELECT * FROM Users WHERE username=?",MyUserName,function(err, data){
      if(err) throw err;
      console.log(data);
    
        
         //pushes the hardcoded names and information into relevant arrays
        favMovies.push(data[0].movie_one, data[0].movie_two, data[0].movie_three);
        favActors.push(data[0].actor_one, data[0].actor_two, data[0].actor_three);
        favDirectors.push(data[0].director_one, data[0].director_two, data[0].director_three);
        favGenres.push(data[0].genre_one, data[0].genre_two, data[0].genre_three);
        console.log(favActors,favDirectors,favGenres,favMovies);
        buddySearchTwo();
      
      })};
    
      BuddySearchOne();
        


      module.exports={
          BuddySearch:BuddySearchOne,
          buddySearchTwo:buddySearchTwo,
          buddySearchThree:buddySearchThree
          }
        