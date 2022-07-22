module.exports = function setupTaskModel(TaskModel) {

    function create(model) {
        return new Promise(async (resolve, reject)=> {
            try {
                await TaskModel.create(model).then(result => {
                    resolve({message: 'create task'})
                })
            }catch (e) {
                reject(e)
            }
        })
    }

    function update(model, id) {
        return new Promise(async (resolve, reject)=> {
            try {
                await TaskModel.update(model, {
                    where: id
                }).then(result => {
                    resolve({message: 'update task'})
                })
            }catch (e) {
                reject(e)
            }
        })
    }

    function list() {
        return new Promise(async (resolve, reject)=> {
            try {
                await TaskModel.findAll().then(result => {
                    resolve(result)
                })
            }catch (e) {
                reject(e)
            }
        })
    }

    return{
        create,
        list,
        update
    }
}