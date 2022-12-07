var { Sequelize, Model, DataTypes } = require('sequelize');
const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    finish: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    // Other model options go here
});

sequelize.sync({
    alter: true
})