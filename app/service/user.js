const { Service } = require('egg')

class UserService extends Service {
    async getAll() {
        return await this.ctx.model.User.findAll()
    }

    // 新增人员
    // async addUser(nickname) {
    //     const { ctx } = this;
    //     const password = this.getMd5Data(DEFAULT_PWD);
    //     await ctx.model.User.create({ nickname, password });
    // }
    // 修改密码
    async editPwd(id, password) {
        const { ctx } = this;
        const user = await ctx.model.User.findByPk(id);
        // const newPwd = this.getMd5Data(password);
        await user.update({ password: password });
    }

    // 专门对数据进行md5加密的方法，输入明文返回密文
    // getMd5Data(data) {
    //     return crypto.createHash('md5').update(data).digest('hex');
    // }

}
module.exports = UserService