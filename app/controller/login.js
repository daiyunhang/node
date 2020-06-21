'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');

class LoginController extends Controller {
    async login() {
        const { ctx, app } = this;
        const { username, password } = ctx.request.body || {};
        const name = await ctx.service.login.index(username);
        if (name && name.password == password) {
            // 验证通过，生成token
            const token = app.jwt.sign({
                name: name.username,
                exp: Math.floor(new Date().getTime() / 1000) + 60 * 60 * 240
            }, app.config.jwt.secret);
            //存到cookie当中，设置过期时间为一天
            ctx.cookies.set('token', token, {
                maxAge: 24 * 3600 * 1000
                // maxAge: 3000 //三秒
            })

            ctx.body = {
                code: 200,
                data: name,
                msg: '请求成功'
            }
        } else {
            const res = "用户名或密码错误"
            const code = 201
            ctx.helper.success({ ctx, code, res })
        }
    }

    async loginOut() {
        const { ctx } = this;
        ctx.cookies.set('token', null)
        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx })
    }
}

module.exports = LoginController;
