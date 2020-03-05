var username;
var movieone= $(".movie-one");
var movieTwo = $(".movie-two");
var movieThree = $(".movie-three");
var actorone = $(".actor-one");
var actorTwo = $(".actor-two");
var actorThree = $(".actor-three");
var directorOne = $(".director-one");
var directortwo = $(".director-two");
var directorthree = $(".director-three");
var genreOne = $("#genre-1");
var genreTwo = $("#genre-2");
var genreThree = $("#genre-3");
var searchable=$(".searchable");
var numberOfMovies=$("#searchNumber");
$(document).ready(function(){
  $(".searchForm").attr("style","visibility:collapse");
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.username);
    username=data.username;
    
  //    });
   });
  })
   
var handleSubmit=function(event){
  event.preventDefault();
  event.stopPropagation();
  // console.log(movieOne.val());
  var userInformation= 
    {
      "movie_one":movieone.val(),
      "movie_two":movieTwo.val(),
      "movie_three":movieThree.val(),
      "actor_One":actorone.val(),
      "actor_two":actorTwo.val(),
      "actor_three":actorThree.val(),
      "director_one":directorOne.val(),
      "director_two":directortwo.val(),
      "director_three":directorthree.val(),
      "genre_one":genreOne.val(),
      "genre_two":genreTwo.val(),
      "genre_three":genreThree.val(),
      "searchable":searchable.val(),
      
  };
  console.log(userInformation);
  $.ajax({
    url:"/api/submitUserInformation/"+username,
    type:"put",
    data:userInformation
}).then(function(){
    console.log("postedInformation");
    // location.reload();

})

  

} ;

$(".submitButton").on("click",handleSubmit);


$(".searchable").on('change', function() {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }
  
});
   



//    $.ajax({
//     url:"/api/burgers/"+id,
//     type:"PUT",
// }).then(function(){
//     console.log("shit"+id + "is eaten");
//     location.reload();

// })