const { Controller } = require('egg')

class USerController extends Controller {
    // 获取用户
    async index() {
        const { ctx } = this
        const name = ctx.state.name;
        let result = null
        if (name == 'admin') {
            result = await ctx.service.user.getAll()
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
    // async create() {
    //     const { ctx } = this;
    //     const { nickname } = ctx.request.body;
    //     await ctx.service.user.addUser(nickname);
    //     ctx.body = { code: 200, msg: '新增成功' };
    // }

    // 修改密码
    async edit() {
        const { ctx } = this
        const { id, password } = ctx.request.body || {};
        await ctx.service.user.editPwd(id, password);
        ctx.body = { code: 200, msg: '修改成功' };
    }
}
module.exports = USerController