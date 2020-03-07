module.exports = function(sequelize, DataTypes) {
    var searchBuddyData = sequelize.define("SearchBuddyData", {
      username:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
         buddyREsults: {
        type: DataTypes.STRING(100000),
        allowNull: true},
     
     
      });
      return searchBuddyData;
    };
    
    
  
