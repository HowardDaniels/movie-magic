var axios = require('axios').default;
var movieSearch = require("./public/js/movie-search");
var buddySearch = require("./public/js/buddy-search")
var db = require("./models");
var passport = require("./config/passport");
var express = require("express");
var app = express();
var id="shawnwhy";
var numberofMovies=5;
 function callback() {
    console.log("searching");
    
  movieSearch.movieSearch(id,numberofMovies);
  buddySearch.buddySearch(id);
    setTimeout(function(){
    
       
    
      
       





    },4000)
   }

callback();

// buddySearch.buddySearch(id,function(chosenMovies){
    

// }));



