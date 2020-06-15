const { Service } = require('egg')

class UserService extends Service {
    async getAll(){
        // return [
        //     {name:'service'}
        // ]
     return await this.ctx.model.User.findAll()
    }
}
module.exports = UserService