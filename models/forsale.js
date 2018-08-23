module.exports = function(sequelize, DataTypes) {

    const forsale = sequelize.define('forsale', {
        
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
            type: DataTypes.DECIMAL (10, 2),
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

    forsale.associate = function(models) {
        forsale.belongsTo(models.Users, {
            foreignKey: 
                {
                    allowNull: false
                }
        });
    };

    return forsale;
};
  