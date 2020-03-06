
// var bcrypt = require("bcryptjs");

// module.exports = function(sequelize, DataTypes) { 
//   var user = sequelize.define("user", {
//     // id: {
//     //     type: DataTypes.INTEGER,
//     //     primaryKey:true,
//     //     autoIncrement:true,
//     //     allowNull: false },

//     Password: {
//         type: DataTypes.STRING(50),
//         allowNull: false
//       },  

//     username: {

//     type: DataTypes.STRING(50),
//     allowNull: false,

//             },
//     dateOfBirth:{type:DataTypes.DATEONLY,
//             allowNull:true},

//     movie_one: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     movie_two: {
//                 type: DataTypes.STRING(50),
//                 allowNull: true,
//                 },

//      movie_three: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     actor_one: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     actor_two: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     actor_three: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     director_one: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     director_two: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },
    
//     director_three: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     genre_one: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     genre_two: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },
    
//     genre_three: {
//               type: DataTypes.STRING(50),
//               allowNull: true,
//               },

//     Release_year:{
//               type:DataTypes.INTEGER(4),
//               allowNull:true
//     },
//     age_restriction:{
//               type:DataTypes.STRING(10),
//               allowNull:true
//     },
//     searchable:{
//       type:DataTypes.BOOLEAN,
//       allowNull:true
//     },
//     XCoords:{
//       type:DataTypes.DECIMAL(23,10),
//       allowNull:true
//     },
//     YCoords:{
//       type:DataTypes.DECIMAL(23,10),
//       allowNull:true
//     },
//   });

//     user.prototype.validPassword = function(Password) {
//       return bcrypt.compareSync(Password, this.Password);
//     };
//     user.addHook("beforeCreate", function(user) {
//       user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10), null);

   
//    return user;
//  });
// }
  
//  "Hello, this is Mike (example)".replace(/ *\([^)]*\) */g, "");
 
 

//  Release_year INTEGER(4),
// age_restriction VARCHAR(2),
// Number_results INT(20),
// Searchable boolean,
// xCoords DECIMAL(13,10),
// yCoords DECIMAL(12,10),
// primary key (id)


// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    } ,
     // dateOfBirth:{type:DataTypes.DATEONLY,
    //         allowNull:true},
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
  });
  //  This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};

