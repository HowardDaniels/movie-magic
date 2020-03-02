var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) { 
  var user = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false },

    Password: {
        type: DataTypes.STRING(50),
        allowNull: false
      },  

    username: {

    type: DataTypes.STRING(50),
    allowNull: false,

            },
    dateOfBirth:{type:DataTypes.DATEONLY,
            allowNull:true},

    movie_one: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    movie_two: {
                type: DataTypes.STRING(50),
                allowNull: true,
                },

     movie_three: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    actor_one: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    actor_two: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    actor_three: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    director_one: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    director_two: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },
    
    director_three: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    genre_one: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    genre_two: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },
    
    genre_three: {
              type: DataTypes.STRING(50),
              allowNull: true,
              },

    Release_year:{
              type:DataTypes.INTEGER(4),
              allowNull:true
    },
    age_restriction:{
              type:DataTypes.STRING(10),
              allowNull:true
    },
    searchable:{
      type:DataTypes.BOOLEAN,
      allowNull:true
    },
    XCoords:{
      type:DataTypes.DECIMAL(23,10),
      allowNull:true
    },
    YCoords:{
      type:DataTypes.DECIMAL(23,10),
      allowNull:true
    },
  });

    user.prototype.validPassword = function(Password) {
      return bcrypt.compareSync(Password, this.Password);
    };
    user.addHook("beforeCreate", function(user) {
      user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10), null);

   
   return user;
 });
}
  
//  "Hello, this is Mike (example)".replace(/ *\([^)]*\) */g, "");
 
 

//  Release_year INTEGER(4),
// age_restriction VARCHAR(2),
// Number_results INT(20),
// Searchable boolean,
// xCoords DECIMAL(13,10),
// yCoords DECIMAL(12,10),
// primary key (id)

