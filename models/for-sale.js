module.exports = function(sequelize, DataTypes) {

    const ForSale = sequelize.define('ForSale', {
        
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

    ForSale.associate = function(models) {
        // We're saying that a ForSale entry should belong to a User
        // A ForSale entry can't be created without a User due to the foreign key constraint
        ForSale.belongsTo(models.Users, {
            foreignKey: 
                {
                    allowNull: false
                }
        });
    };

    return ForSale;
};
  