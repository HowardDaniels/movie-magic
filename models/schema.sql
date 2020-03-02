-- -----------------------------------------------------
-- Schema 
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `movie-magic` DEFAULT CHARACTER SET utf8 ;
USE `movie-magic` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie-magic`.`users` (
  `userID` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `first_name` VARCHAR(20) NOT NULL,
  `last_name` VARCHAR(20) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`userID`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `movie-magic`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie-magic`.`reviews` (
  `reviewID` INT(11) NOT NULL,
  `review_title` VARCHAR(45) NOT NULL,
  `rating` INT(11) NOT NULL,
  `review` TEXT(255) NOT NULL,
  PRIMARY KEY (`reviewID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `movie-magic`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movie-magic`.`movies` (
  `movieID` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(20) NOT NULL,
  `rating` VARCHAR(20) NOT NULL,
  `year` INT(11) NOT NULL,
  `watched` VARCHAR(1) NOT NULL,
  `TMDB_ID` INT(11) NOT NULL,
  `userID` INT(11),
  `reviewID` INT(11),
  PRIMARY KEY (`movieID`),
  FOREIGN KEY (`userID`) REFERENCES `users`(`userID`),
  FOREIGN KEY (`reviewID`) REFERENCES `reviews`(`reviewID`))
ENGINE = InnoDB;