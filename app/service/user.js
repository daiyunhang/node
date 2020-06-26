const { Service } = require('egg')
const crypto = require('crypto');

class UserService extends Service {
    async getAll() {
        const { ctx } = this;
        // return await ctx.model.User.findAll()
        return await ctx.model.User.findAll({
            include: [{
                as: "Role",
                model: ctx.model.Role.scope('proAttr')
            }]
        })
    }

    // 新增人员
    async addUser(username, pwd, nickname, roleId) {
        const { ctx } = this;
        const password = this.getMd5Data(pwd);
        await ctx.model.User.create({ username, password, nickname, roleId });
    }
    // 删除人员
    async removeUser(id) {
        const { ctx } = this;
        await ctx.model.User.destroy({
            where: {
                id: id
            }
        });
    }
    // 修改密码
    async editPwd(id, password) {
        const { ctx } = this;
        const user = await ctx.model.User.findByPk(id);
        const newPwd = this.getMd5Data(password);
        await user.update({ password: newPwd });
    }

    // 专门对数据进行md5加密的方法，输入明文返回密文
    getMd5Data(data) {
        return crypto.createHash('md5').update(data).digest('hex');
    }

}
module.exports = UserService