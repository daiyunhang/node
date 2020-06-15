module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const User = app.model.define("users", {
        name: {
            type: STRING(30)
        },
        age: {
            type: STRING(30)
        }
    }, {
        timestamps: false
    });
    // 数据库同步  User.sync({force: true})
    return User;
};