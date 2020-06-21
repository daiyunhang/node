const Service = require('egg').Service;

class Login extends Service {
  async index(username) {
    return await this.ctx.model.User.findOne({
      where: {
        username: username,
      },
    });
  }
}

module.exports = Login;
