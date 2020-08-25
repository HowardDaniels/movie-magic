# Movie-Magic

This application allows the user to find movies and fellow movie buffs (called "buddies") based on information they provide in a form which is accessed upon signing up or logging in.

Once the user's top 3 favorite movies, actors, directors, and movie genres are entered, the user consents to being searchable by fellow movie buffs, and then submits the form.

Upon submitting the form, users see descriptions of their favorite movies, recommended movies based on their favorite movies, actors, directors, and genres. These recommended movie results include posters which can be clicked on to access the Rotten Tomatoes page for that movie. In addition, the user sees a list of buddies whose tastes in movies are closest to theirs.

This application uses OMDB API to search movie data, as well as MySQL to store user data in a database.

The business impact of this application is the ability for movies to receive increased publicity through recommendations and social networks developed through the buddy search.

Future developments to this project include adding geolocation to prioritize nearby buddies in the search, as well as messaging between buddies.

Live Demo: https://infinite-inlet-20359.herokuapp.com


## Usage

1. User can sign up or log in at the starting page.

2. Afterwards, the user will be taken to the user page.  
where some movie related information about the user
can be submitted. 

3. The three favorite movie of the user 
will be show atop the user page as decorative posters.

![](giphymovie1.gif)

![](giphymovie2.gif)

4. Afterwards, the user can submit search. 
then they will be taken to the results page, 
where movie posters of the currently showing
movies will be displayed. 

![](giphymovie3.gif)

on the bottom, the app will find buddies for the 
users that have the most in common with them.
