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

    return Users;
};
  
