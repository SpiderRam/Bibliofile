module.exports = function(sequelize, DataTypes) {

    const Users = sequelize.define('users', {
        
        username: {
            type: DataTypes.STRING,
            allowDuplicates: false
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowDuplicates: false
        }
    }, {
        allowNull: false,
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

    ForSale.associate = function(models) {
        // We're saying that a Library entry should belong to a User
        // A Library entry can't be created without a User due to the foreign key constraint
        ForSale.belongsTo(models.Users, {
            foreignKey: 
                {
                    allowNull: false
                }
        });
    };

    Wishlist.associate = function(models) {
        // We're saying that a Library entry should belong to a User
        // A Library entry can't be created without a User due to the foreign key constraint
        Wishlist.belongsTo(models.Users, {
            foreignKey: 
                {
                    allowNull: false
                }
        });
    };
    

    return Users;
};
  
