//make sure that the db.user is the correct talle name.
//and the variable username and password are the correct ones being used.
var db = require("../models");

var moment = require('moment');
var request = require('ajax-request');
var $ = require('jQuery')




var movieSearchOne = function(numberOfMovies){
var MyUserName = req.user.username;
var password = password;

  app.get("/api/todos", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.user.findOne({
        where: {
            username : MyUserName

        }
    }).then(function(dbuser) {
     var favMovies=[];
     var favActors =[];
     var favDirectors=[];
     var favGenres=[];
     var miscNames=[];
     //pushes the hardcoded names and information into relevant arrays
    favMovies.push(dbuser.movie-one, dbuser.movie_two, dbuser.movie_three);
    favActors.push(dbuser.actor-one, dbuser.actor_two, dbuser.actor_three);
    favDirectors.push(dbuser.director-one, dbuser.director_two, dbuser.director_three);
    favGenres.push(dbuser.genre-one, genre.movie_two, genre.movie_three);
    movieSearchTwo();
  
  })})};
    
    
    
    var movieSearchTwo = function(favMovies,favActors,favDirectors,favGenres,miscNames,numberOfMovies){
      //find the information pertaining to the user's favorite movies.
      //the information is then pushed into the miscnames array.
      for (var i=0; i<favMovies.length;i++){
      var queryURL=`http:www.omdbapi.com/T=${favMovies[i]}&apikey=7e6191f4`;

      request({
        url: queryURL,
        method: 'GET',
       
      }, function(err, res, body) {
           
          var foundActors=response.Actors;
          var foundDirectors=response.Director;
          var foundGenre=response.Genre;
          var foundWriters=response.writer;

          foundActors=foundActors.split(",");
          for(i=0; i<foundActors.length; i++){
           var temp = foundActors[i].trim(" ").replace(/ *\([^)]*\) */g, "");
           foundActors[i]=temp;
          };
          foundDirectors=foundDirectors.split(",");
          for(i=0; i<foundDirectors.length; i++){
           var temp = foundDirectors[i].trim(" ").replace(/ *\([^)]*\) */g, "");
           foundDirectors[i]=temp;
          };
          foundWriters=foundWriters.split(",");
          for(i=0; i<foundWriters.length; i++){
           var temp = foundWriters[i].trim(" ").replace(/ *\([^)]*\) */g, "");
           foundWriters[i]=temp;
          };
          miscNames.push(foundDirectors,foundActors,foundWriters,foundGenre);
          
          movieSearchThree();
      })}};

      //find the movies that are showing at the moment of search.


      var movieSearchThree = function(favMovies,favActors,favDirectors,favGenres,miscNames,numberOfMovies){
      var now = moment();
      var weekinpast=now.endOf("weeks").subtract(1,"weeks").subtract(1,"days").format("YYYY-MM-DD").toString();
      var weekinfuture=now.endOf("weeks").add(1, "weeks").subtract(1,"days").format("YYYY-MM-DD").toString();

       
       
      var queryURL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity&certification_country=US&primary_release_date.gte=${weekinpast}&primary_release_date.lte=${weekinfuture}&api_key=7a56247c125d9cfd74900b9921c62fc7`;
      console.log(queryURL);
    
      request({
        url: queryURL,
        method: 'GET',
       
      }, function(err, res, body) {
        
        var results= body.results;
        results=results.slice(0,21);
        var chosenMovies=[];
        var resultTitles=[];
        for(var i=0; i<results.length;i++){
          resultTitles.push(results.original_title)}
          //start of the operataion to search for info on each movie
        for(var i=0; i<resultTitles;i++){
        //for each of the fond movie titles, a query is made to collect all of the cast and crew informaiton 
          //of the collected movies
          var queryURL=`http:www.omdbapi.com/T=${resultTitles[i]}&apikey=7e6191f4`;
          

          request({
            url: queryURL,
            method: 'GET',
           
          }, function(err, res, body) {
            var score=body.Metascore*.1;
            var newFoundActorString=body.Actors;
            var newFoundDirectorString=body.Director;
            var newFoundGenreString=body.Genre;  
            var newFoundWriterString=body.Writer;
            var newFoundPoster=body.Poster;

            newFoundActorArray=newFoundActorString.split(",");
          for(i=0; i<newFoundActorArray.length; i++){
           var temp = newFoundActorArray[i].trim(" ").replace(/ *\([^)]*\) */g, "");
           newFoundActorArray[i]=temp;
          };
          newFoundDirectorArray=newFoundDirectorString.split(",");
          for(i=0; i<newFoundDirectorArray.length; i++){
           var temp = newFoundDirectorArray[i].trim(" ").replace(/ *\([^)]*\) */g, "");
           newFoundDirectorArray[i]=temp;
          }; 
          newFoundGenre=newFoundGenreString.split(",");
          for(i=0; i<newFoundWriterArray.length; i++){
           var temp = newFoundWriterArray[i].trim(" ").replace(/ *\([^)]*\) */g, "");
           newFoundWriterArray[i]=temp;
          }; 
          newFoundWriterArray=newFoundWriterString.split(",");
          for(i=0; i<newFoundWriterArray.length; i++){
           var temp = newFoundWriterArray[i].trim(" ").replace(/ *\([^)]*\) */g, "");
           newFoundWriterArray[i]=temp;
          }; 

          for(var i=0;i<newFoundActorArray.length;i++){
            if(favActors.indexOf(newFoundActorArray[i]>-1)){
              score+=10;
            }
          };
          for(var i=0;i<newFoundDirectorArray.length;i++){
            if(favDirectors.indexOf(newFoundDirectorArray[i]>-1)){
              score+=10;
            }
          };
          for(var i=0;i<newFoundGenreArray.length;i++){
            if(favGenres.indexOf(newFoundActorArray[i]>-1)){
              score+=10;
            }
          };

          var newFoundMiscArray=concat(newFoundWriterArray,newFoundActorArray,newFoundDirectorArray,newFoundGenreArray);
          for(var i=0;i<newFoundMiscArray.length;i++)
            {
              if (miscNames.indexOf(newFoundMiscArray[i]>-1)){
                score++;
              }};
          var tomatoTitle=resultTitles[i].replace(" ","_");
          var newRottenTomatoLink = `https://www.rottentomatoes.com/m/${tomatoTitle}`

              var newMoiveObject={
                title:resultTitles[i],
                movieScore:score,
                poster:newFoundPoster,
                rottenTomatoLink:newRottenTomatoLink 
                
              };
              chosenMovies.push(newMoiveObject);
              });
         }});
         movieSearchFour();
        
    
  };
  var movieSearchFour = function(chosenMovies,favActors,favDirectors,favGenres,miscNames,numberOfMovies){
    //sort the array  of the movie objects and pick out the the top ones numbered as the numberOfMOvies Variable

    for (let i=1; i<chosenMovies.length; i++){
      let j=i-1;
      let tmp = chosenMovies[i];
      while(j>=0 && chosenMovies[j].movieScore > tmp.movieScore){
        chosenMovies[j+1] = chosenMovies[j];
        j--
      }
      chosenMovies[j+1]=tmp
}

// app.post("/api/result", function(req, res) {
//   db.Example.create(req.body).then(function(dbExample) {
//     res.json(dbExample);
//   });
// });

//pulling the top scoring movies out
chosenMovies=chosenMovies.slice(0,numberOfMovies+1);
//deploy movie posters

render("index", {
  msg: "Welcome!",
  examples: dbExamples
});












  }