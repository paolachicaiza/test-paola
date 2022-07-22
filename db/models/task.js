const Sequelize = require('sequelize')
const setupDataBase = require('./../libs/conexion')

module.exports = function setupTaskModel(config) {
    const sequelize = setupDataBase(config)
    return sequelize.define('task',{
        idTask:{
            primaryKey: true,
            field: 'ID',
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nameTask:{
            field: 'TASK_NAME',
            type: Sequelize.STRING,
            allowNull: true
        },
        dateTask:{
            field: 'TASK_DATE',
            type: Sequelize.DATE,
            allowNull: true
        },
        descriptionTask:{
            field: 'TASK_DESCRIPTION',
            type: Sequelize.STRING,
            allowNull: true
        }
    },{
        tableName: 'task',
        timestamps: false
    })
}