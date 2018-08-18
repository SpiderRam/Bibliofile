module.exports = function(sequelize, DataTypes) {

    const Library = sequelize.define('Library', {
        
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
        }
    }, {
        freezeTableName: true
       } 
    );

    Library.associate = function(models) {
        // We're saying that a Library entry should belong to a User
        // A Library entry can't be created without a User due to the foreign key constraint
        Library.belongsTo(models.Users, {
            foreignKey: 
                {
                    allowNull: false
                }
        });
    };


    return Library;
};
  
