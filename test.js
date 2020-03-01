// var shitlist="crimson, clover, (dasboot heist)";

// craplist=shitlist.split(",");
// console.log(craplist);

// // for(i=0; i<craplist.length; i++){
// //     var temp = craplist[i].trim(" ").replace(/ *\([^)]*\) */g, "");
// //     craplist[i]=temp;


// // }
// // console.log(craplist);

// //  "Hello, this is Mike (example)".replace(/ *\([^)]*\) */g, "");


var moment = require('moment');

// var now = moment();
// var weekinpast=now.endOf("weeks").subtract(1,"weeks").subtract(1,"days").format("YYYY-MM-DD").toString();
// var weekinfuture=now.endOf("weeks").add(1, "weeks").subtract(1,"days").format("YYYY-MM-DD").toString();

// console.log(weekinfuture);
// console.log(weekinpast);
var request = require('ajax-request');
var $ = require('jQuery')
var now = moment();
var weekinpast=now.endOf("weeks").subtract(1,"weeks").subtract(1,"days").format("YYYY-MM-DD").toString();
var weekinfuture=now.endOf("weeks").add(1, "weeks").subtract(1,"days").format("YYYY-MM-DD").toString();

 
 
  var queryURL=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity&certification_country=US&primary_release_date.gte=${weekinpast}&primary_release_date.lte=${weekinfuture}&api_key=7a56247c125d9cfd74900b9921c62fc7

  `;
  console.log(queryURL);

  request({
    url: queryURL,
    method: 'GET',
   
  }, function(err, res, body) {
      console.log(body.toString());
    
  });

//   certification_country=