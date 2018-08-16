module.exports = function(sequelize, DataTypes) {

    const ForSale = sequelize.define('for_sale', {
        
        User_GUID: {
            type: DataTypes.INTEGER,
            // add foreign key
        },
        ISBN_10: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ISBN_13: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Series: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Format: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Min_Price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Notes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        freezeTableName: true
       } 
    );

    return ForSale;
};
  