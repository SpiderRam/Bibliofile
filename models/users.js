module.exports = function(sequelize, DataTypes) {

    const Users = sequelize.define('Users', {
        
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

    Users.associate = function(models) {
        // Associating Users with Library entries
        // When a User is deleted, also delete any associated Library entries
        Users.hasMany(models.Library, 
            {
                onDelete: "cascade"
            });
    };
    
    Users.associate = function(models) {
        // Associating Users with ForSale entries
        // When a User is deleted, also delete any associated ForSale entries
        Users.hasMany(models.ForSale, 
            {
                onDelete: "cascade"
            });
    };
    
    Users.associate = function(models) {
        // Associating Users with Wishlist entries
        // When a User is deleted, also delete any associated Wishlist entries
        Users.hasMany(models.Wishlist, 
            {
                onDelete: "cascade"
            });
    };
    
    return Users;
};
  
