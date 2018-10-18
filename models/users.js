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
        Users.hasMany(models.Library, 
            {
                onDelete: "cascade"
            });

            Users.hasMany(models.forsale, 
                {
                    onDelete: "cascade"
                });

                Users.hasMany(models.Wishlist, 
        
                    {
                        onDelete: "cascade"
                    });
    };
    
    return Users;
};
  
