const {sign} = require('./../../libs/auth')
module.exports = function setupUserModel(UserModel) {

    function authUser(model) {
        return new Promise(async (resolve, reject)=> {
            try {
                const user = await UserModel.findOne({
                    where: model
                })
                if (user){
                    const jsonToken = {
                        id: user.id,
                        name: user.name,
                        password: user.password
                    }
                    const data = {
                        name: user.name,
                        token: sign(jsonToken)
                    }
                    console.log('data', data)
                    resolve(data)
                }else {
                    resolve({message: 'Credenciales invalidas'})
                }
            }catch (e) {
                reject(e)
            }
        })
    }

    return{
        authUser
    }
}