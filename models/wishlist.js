module.exports = function(sequelize, DataTypes) {

    const Wishlist = sequelize.define('wishlist', {
        
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

    Wishlist.associate = function(models){
        Wishlist.hasOne(models.Users, { foreignKey: 'ID' });
    };

    return Wishlist;
};
  