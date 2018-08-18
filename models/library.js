module.exports = function(sequelize, DataTypes) {

    const Library = sequelize.define('Library', {
        
        ISBN_10: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ISBN_13: {
            type: DataTypes.INTEGER (13),
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

    Library.associate = function(models) {
        Library.belongsTo(models.Users, {
            foreignKey: 
                {
                    allowNull: false
                }
        });
    };


    return Library;
};
  
