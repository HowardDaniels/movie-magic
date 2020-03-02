// var shitlist="crimson, clover, (dasboot heist)";

// craplist=shitlist.split(",");
// console.log(craplist);

// // for(i=0; i<craplist.length; i++){
// //     var temp = craplist[i].trim(" ").replace(/ *\([^)]*\) */g, "");
// //     craplist[i]=temp;


// // }
// // console.log(craplist);

// //  "Hello, this is Mike (example)".replace(/ *\([^)]*\) */g, "");


// var moment = require('moment');

// // var now = moment();
// // var weekinpast=now.endOf("weeks").subtract(1,"weeks").subtract(1,"days").format("YYYY-MM-DD").toString();
// // var weekinfuture=now.endOf("weeks").add(1, "weeks").subtract(1,"days").format("YYYY-MM-DD").toString();

// // console.log(weekinfuture);
// // console.log(weekinpast);
// var request = require('ajax-request');
// var $ = require('jQuery')
// var now = moment();
// var weekinpast=now.endOf("weeks").subtract(1,"weeks").subtract(1,"days").format("YYYY-MM-DD").toString();
// var weekinfuture=now.endOf("weeks").add(1, "weeks").subtract(1,"days").format("YYYY-MM-DD").toString();

 
 
//   var queryURL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity&certification_country=US&primary_release_date.gte=${weekinpast}&primary_release_date.lte=${weekinfuture}&api_key=7a56247c125d9cfd74900b9921c62fc7

//   `;
//   console.log(queryURL);

//   request({
//     url: queryURL,
//     method: 'GET',
   
//   }, function(err, res, body) {
//       console.log(body.toString());
    
//   });

//   certification_country=
// var db = require("./models");
const axios = require('axios').default;

var moment = require('moment');
var request = require('ajax-request');
var $ = require('jQuery')

var favActor=["Tom Cruise","Tom Hanks","Mel Brooks"];
var favMovies=["Toy Story","the Edge of Tomorrow", ];
var favDirectors=["Steven Spielberg","Rian Johnson", "Mel Brooks"];
var favWriters=["Frank Miller", "Ethan Cohen", "Rob Schneider"];
var numberofMovies=10;


var movieSearchThree = function(favMovies,favActors,favDirectors,favGenres,miscNames,numberOfMovies){
    var now = moment();
    var weekinpast=now.endOf("weeks").subtract(1,"weeks").subtract(1,"days").format("YYYY-MM-DD").toString();
    var weekinfuture=now.endOf("weeks").add(1, "weeks").subtract(1,"days").format("YYYY-MM-DD").toString();

     
     
    var queryURL= `https://api.themoviedb.org/3/discover/movie?sort_by=popularity&primary_release_date.gte=${weekinpast}&primary_release_date.lte=${weekinfuture}&api_key=7a56247c125d9cfd74900b9921c62fc7&language=en-US`;
    console.log(queryURL);
  
    request({
      url: queryURL,
      method: 'GET',
     
    }, function(err, res, body) {
      
      var results= JSON.parse(body);
      results=results.results;
      console.log(results);
      results=results.slice(0,21);
      var chosenMovies=[];
      var resultTitles=[];
      for(var i=0; i<results.length;i++){
          if(results[i].original_language==='en'){
        resultTitles.push(results[i].original_title);};
            }
        console.log(resultTitles);
        //start of the operataion to search for info on each movie
      for(var i=0; i<resultTitles.length;i++){
      //for each of the fond movie titles, a query is made to collect all of the cast and crew informaiton 
        //of the collected movies
        queryURL=`http:www.omdbapi.com/?T=${resultTitles[i]}&apikey=7e6191f4`;
        console.log(queryURL);
        axios.get(queryURL)
        .then(function(response){
        //     // console.log(response);
        // })
        // // .catch(function(err){
        // //     console.log(so);
        // // .finally(function(){
        // //     console.log(response.Title);
})}})};

       
//  

//           var score=newBody.Metascore*.1;
//           var newFoundActorString=newBody.Actors;
//           var newFoundDirectorString=newBody.Director;
//           var newFoundGenreString=newBody.Genre;  
//           var newFoundWriterString=newBody.Writer;
//           var newFoundPoster=newBody.Poster;

//           newFoundActorArray=newFoundActorString.split(",");
//         for(i=0; i<newFoundActorArray.length; i++){
//          var temp = newFoundActorArray[i].trim(" ").replace(/ *\([^)]*\) */g, "");
//          newFoundActorArray[i]=temp;
//         };
//         newFoundDirectorArray=newFoundDirectorString.split(",");
//         for(i=0; i<newFoundDirectorArray.length; i++){
//          var temp = newFoundDirectorArray[i].trim(" ").replace(/ *\([^)]*\) */g, "");
//          newFoundDirectorArray[i]=temp;
//         }; 
//         newFoundGenre=newFoundGenreString.split(",");
//         for(i=0; i<newFoundWriterArray.length; i++){
//          var temp = newFoundWriterArray[i].trim(" ").replace(/ *\([^)]*\) */g, "");
//          newFoundWriterArray[i]=temp;
//         }; 
//         newFoundWriterArray=newFoundWriterString.split(",");
//         for(i=0; i<newFoundWriterArray.length; i++){
//          var temp = newFoundWriterArray[i].trim(" ").replace(/ *\([^)]*\) */g, "");
//          newFoundWriterArray[i]=temp;
//         }; 

//         for(var i=0;i<newFoundActorArray.length;i++){
//           if(favActors.indexOf(newFoundActorArray[i]>-1)){
//             score+=10;
//           }
//         };
//         for(var i=0;i<newFoundDirectorArray.length;i++){
//           if(favDirectors.indexOf(newFoundDirectorArray[i]>-1)){
//             score+=10;
//           }
//         };
//         for(var i=0;i<newFoundGenreArray.length;i++){
//           if(favGenres.indexOf(newFoundActorArray[i]>-1)){
//             score+=10;
//           }
//         };

//         var newFoundMiscArray=concat(newFoundWriterArray,newFoundActorArray,newFoundDirectorArray,newFoundGenreArray);
//         for(var i=0;i<newFoundMiscArray.length;i++)
//           {
//             if (miscNames.indexOf(newFoundMiscArray[i]>-1)){
//               score++;
//             }};
//         var tomatoTitle=resultTitles[i].replace(" ","_");
//         var newRottenTomatoLink = `https://www.rottentomatoes.com/m/${tomatoTitle}`

//             var newMoiveObject={
//               title:resultTitles[i],
//               movieScore:score,
//               poster:newFoundPoster,
//               rottenTomatoLink:newRottenTomatoLink 
              
//             };
//             chosenMovies.push(newMoiveObject);
//             console.log(chosenMovies);
//             }});
//             // movieSearchFour();

//        }});
//     //    movieSearchFour();
      
  
// };
// var movieSearchFour = function(chosenMovies,favActors,favDirectors,favGenres,miscNames,numberOfMovies){
//   //sort the array  of the movie objects and pick out the the top ones numbered as the numberOfMOvies Variable

//   for (let i=1; i<chosenMovies.length; i++){
//     let j=i-1;
//     let tmp = chosenMovies[i];
//     while(j>=0 && chosenMovies[j].movieScore > tmp.movieScore){
//       chosenMovies[j+1] = chosenMovies[j];
//       j--
//     }
//     chosenMovies[j+1]=tmp
// }

// // app.post("/api/result", function(req, res) {
// //   db.Example.create(req.body).then(function(dbExample) {
// //     res.json(dbExample);
// //   });
// // });

// //pulling the top scoring movies out
// chosenMovies=chosenMovies.slice(0,numberOfMovies+1);
// //deploy movie posters

// render("index", {
// msg: "Welcome!",
// examples: dbExamples
// });}

movieSearchThree();







