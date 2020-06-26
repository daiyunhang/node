const Service = require('egg').Service;

class Auth extends Service {
    async index() {
        const { ctx } = this
        return await ctx.model.Auth.findAll()
    }
}

module.exports = Auth;
