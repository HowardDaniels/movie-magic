module.exports = function(sequelize, DataTypes) {
    var searchMovieData = sequelize.define("SearchMovieData", {
      username:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
         movieResults: {
        type: DataTypes.STRING(100000),
        allowNull: true},
     
     
      });
      return searchMovieData;
    };
    
    
  
