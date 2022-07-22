const {db: {main}} = require('../config')
const setupDataBase = require('./libs/conexion')

/*LIBS*/
const setupTask = require('./libs/task')
const setupUser = require('./libs/user')
/*MODELS*/
const setupTaskModel = require('./models/task')
const setupUserModel = require('./models/user')



module.exports =async function () {
try {
    const config = {
        logging: console.log,
        query:{
            raw:true
        },
        ...main
    }
    const sequelize = setupDataBase(config)
    await sequelize.authenticate()

    const TaskModel = setupTaskModel(config)
    const UserModel = setupUserModel(config)

    const Task = setupTask(TaskModel)
    const User = setupUser(UserModel)

    return{
        Task,
        User
    }
}catch (e) {
    console.log('error', e)
}
}

