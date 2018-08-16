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
        Max_Price: {
            type: Datatypes.DECIMAL(10, 2),
            allowNull: false
        },
        Notes: {
            type: DataTypes.text,
            allowNull: true
        }
    }, {
        freezeTableName: true
       } 
    );

    return Wishlist;
};
  