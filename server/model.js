var { Sequelize, Model, DataTypes } = require('sequelize');
global.User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    pw: {
        type: Sequelize.STRING
    },
    pwConfirm: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING

    }

})
sequelize.sync({
    alter: true
})