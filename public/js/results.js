
var username;
var movieArray;
var movieContainer=$(".movieResultsContainer");
var buddyContainer=$(".buddyResultsContainer");
var buddyArray;


$(document).ready(function(){

    setTimeout(function(){
    
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.username);
      username=data.username;
      $.ajax({
        url:"/api/movieSearchInfo/"+username,
        type:"GET"
    }).then(function(response){
        // console.log(response[0].movieResults);
         movieArray=response[0].movieResults;
         movieArray=JSON.parse(movieArray);
         console.log(movieArray[1]);
        deployPosters();
        
    })

        $.ajax({
            url:"/api/buddySearchInfo/"+username,
            type:"GET"
        }).then(function(response){
            // console.log(response[0].buddyREsults);
            buddyArray=response[0].buddyREsults;
            buddyArray=JSON.parse(buddyArray);
            console.log(buddyArray[1]);
            deployBuddies();
        })
})
     
},4000)

})

var deployPosters=function(){
    console.log(movieArray);
    for(var i=0; i<movieArray.length;i++){
        var newPoster = $("<div>");
        
        newPoster.addClass("posterFrame");
        var newLink = $("<a>");
        newLink.attr("href",movieArray[i].rottenTomatoLink);
        var newImage = $("<img>");
        newImage.attr("src",movieArray[i].poster);
        newImage.attr("alt","poster");
        newLink.append(newImage)
        newPoster.append(newLink);
        movieContainer.append(newPoster);}
};
var deployBuddies=function(){
    
    for(var i=0; i<buddyArray.length;i++){
        var newBuddy = $("<div>");
        newBuddy.addClass("buddyFrame");
        var newbuddyName=$("<h3>");
        newbuddyName.text("ID :"+buddyArray[i].username);
        var newbuddyscore=$("<h4>");
        newbuddyscore.text("score :"+buddyArray[i].score);
        newBuddy.append(newbuddyName);
        newBuddy.append(newbuddyscore);

        buddyContainer.append(newBuddy);}
};

$(".logOut").on("click",function(){
    // event.stopPropagation;
    // event.preventDefault;
    $.ajax({
        url:"/api/deleteSearch",
        type:"DELETE"
    }).then(function(response){
        console.log(response);
    })


})