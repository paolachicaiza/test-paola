const Sequelize = require('sequelize')
const setupDataBase = require('./../libs/conexion')

module.exports = function setupTaskModel(config) {
    const sequelize = setupDataBase(config)
    return sequelize.define('users',{
        idUsers:{
            primaryKey: true,
            field: 'idusers',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        username:{
            field: 'username',
            type: Sequelize.STRING,
            allowNull: true
        },
        password:{
            field: 'password',
            type: Sequelize.STRING,
            allowNull: true
        },
        name:{
            field: 'name',
            type: Sequelize.STRING,
            allowNull: true
        }
    },{
        tableName: 'users',
        timestamps: false
    })
}