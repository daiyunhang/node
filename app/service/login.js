const Service = require('egg').Service;

class Login extends Service {
  async index(username) {
    const { ctx } = this
    return await ctx.model.User.findOne({
      where: {
        username: username,
      },
      include: {
        as: "Role",
        model: ctx.model.Role,
      }
    });
  }
}

module.exports = Login;
