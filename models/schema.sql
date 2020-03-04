DROP DATABASE IF EXISTS movie_magic_db;
CREATE DATABASE movie_magic_db;
use movie_magic_db;
DROP TABLE IF EXISTS user;
CREATE TABLE user(
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(100) NOT NULL,
password VARCHAR(100)  NOT NULL,
movie_one VARCHAR(100) NULL,
movie_two VARCHAR(100) NULL,
movie_three VARCHAR(100) NULL,
actor_one VARCHAR(100) NULL,
actor_two vARCHAR(100) NULL,
actor_three VARCHAR(100) NULL,
director_one VARCHAR(100) NULL,
director_two VARCHAR(100) NULL,
director_three VARCHAR(100) NULL,
genre_one VARCHAR(100) NULL,
genre_two VARCHAR(100) NULL,
genre_three VARCHAR(100) NULL,
PRIMARY KEY(id)
);
INSERT INTO user(username, password, movie_one, movie_two, movie_three, actor_one, actor_two, actor_three, director_one,director_two, director_three, genre_one, genre_two, genre_three)
VALUES("shawnwhy","password","Brazil", "The Big Lebowski", "The Favorite", "Emily Blunt", "Christphe Waltz", "Rami Malek","Terry Gilliam","Alfonso Cuarón","Christopher Nolan","Action","Adventure","Sci-Fi"),
("RAbbit","password","JOJO Rabbit", "The Big Lebowski", "He Got Game", "Denzel Washington", "Milla Jovovitch","Paul Walker", "terrence malick","Terry Gilliam","Jean Renoir","Action","Adventure","Drama"),
("Leni","password","DASBOOT", "TROY", "Olympia", "Brad Pitt", "leslie Howard","Humphrey Bogart", "Orson Welles","Rob Cohn","James Wan","Action","Adventure","Drama"),
("Robertson","password","Avengers", "Antman", "Iron man", "Robert Downey jr", "Scarlett Johansson","Mark Ruffalo", "James Cameron","Christopher Nolan","Guillermo del Toro","Action","Adventure","Drama")