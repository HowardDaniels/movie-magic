//the searc for button is clicked 
//a mysql query is performed to findall() where username is equal to currrent user name 
//movie 1-3 is pushed into an array called (favorites movies)
// actor 1-3 is pushed into an array called (favorite actors)
//director 1-3 is pushed into an array called (favorite directors)
//genre 1-3 is pushed into an array called (favoriteGenre)
// for each of the elements in the favorite movies array , 
    //an api call is made to omdb and 
    //the director, actors and writer names are pushed into another array called miscNames
//another mysql query is made to findall() in the database where enableSearch is true
//for each of the found users , the user's 
//movie 1-3 is pushed into an array called (buddyfavoritesmovies)
// actor 1-3 is pushed into an array called (buddyfavoriteactors)
//director 1-3 is pushed into an array called (buddyfavorite directors)
//genre 1-3 is pushed into an array called (buddyfavoriteGenre)
// if one element match in the favorite movies array and buddy favorite movies array , 
//
// Same favorite movie: 20 pts
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
// and if any of the favorite actor, directors matches the miscNames array , also add one point. 

//a object is created for each user, 
//{username:buddyusername,
    //score:score}
    //each of the user objects is pushed into an array called user array.
    //a sort operation is performed in teh array,
    //and the number chosen for the buddy results(5-10 i guess) is pushed into the selectedBuddy Array.
    //for each of the objects in the selected buddy array,
        // a div is created in the results page. 
        //their information and contact information is posted inside the div and presented in the results page. 