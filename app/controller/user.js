const { Controller } = require('egg')

class USerController extends Controller {
    async index(){
        // this.ctx.body = 
        // [
        //     // {name:'gerry'}
        // ]
        const { ctx } = this
        ctx.body = await ctx.service.user.getAll()
    }
}
module.exports = USerController