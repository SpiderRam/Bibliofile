module.exports = function(sequelize, DataTypes) {

    const Library = sequelize.define('library', {
        
        User_GUID: {
            type: DataTypes.STRING,
            // add foreign key
        },
        ISBN_10: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ISBN_13: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Title: {
            type: DataTypes.STRING,
        },
        Author: {
            type: DataTypes.STRING
        },
        Series: {
            type: DataTypes.STRING
        },
        Format: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
       } 
    );

    return Library;
};
  
