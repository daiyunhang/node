'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
    async index() {
        const { ctx } = this;
        const result = await ctx.service.auth.index()
        ctx.body = {
            code: 200,
            data: result,
            msg: '请求成功'
        }
    }
}

module.exports = LoginController;
