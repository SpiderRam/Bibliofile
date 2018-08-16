module.exports = function(sequelize, DataTypes) {

    const Wishlist = sequelize.define('wishlist', {
        
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
        },
        Author: {
            type: DataTypes.STRING
        },
        Series: {
            type: DataTypes.STRING
        },
        Format: {
            type: DataTypes.STRING
        },
        Max_Price: {
            type: Datatypes.DECIMAL(10, 2)
        }
    }, {
        freezeTableName: true
       } 
    );

    return Wishlist;
};
  