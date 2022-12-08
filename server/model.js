var { Sequelize, Model, DataTypes } = require('sequelize');
const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING

    }

})
sequelize.sync({
    alter: true
})