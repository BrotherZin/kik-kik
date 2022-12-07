var { Sequelize } = require("sequelize")

global.User = sequelize.define("user", {
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