const { Controller } = require('egg')

class USerController extends Controller {
    // 获取用户
    async index() {
        const { ctx } = this
        const name = ctx.state.name;
        let result = null
        if (name == 'admin') {
            result = await ctx.service.user.getAll()
            console.log(result,'sssssssssssssssadmin')
        } else {
            let arr = []
            arr.push(await ctx.service.login.index(name));
            result = arr
        }
        ctx.body = {
            code: 200,
            data: result,
            msg: '请求成功'
        }
    }

    // 创建人员
    async create() {
        const { ctx } = this;
        const { username, password, nickname, authId } = ctx.request.body;
        await ctx.service.user.addUser(username, password, nickname, authId);
        ctx.body = { code: 200, msg: '新增成功' };
    }
    // 删除人员
    async remove() {
        const { ctx } = this;
        const { id } = ctx.request.body;
        if (id == 1 || id == 2) {
            ctx.body = { code: 201, msg: '你他喵的没权限' };
            return
        }

        await ctx.service.user.removeUser(id);
        ctx.body = { code: 200, msg: '删除成功' };
    }

    // 修改密码
    async edit() {
        const { ctx } = this
        const { id, password } = ctx.request.body || {};
        await ctx.service.user.editPwd(id, password);
        ctx.body = { code: 200, msg: '修改成功' };
    }
}
module.exports = USerController