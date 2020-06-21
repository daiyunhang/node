module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const User = app.model.define("users", {
        id:{
            type: INTEGER,
            text: "id",
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: STRING(30),
            text: "用户名"
        },
        password: {
            type: STRING(30),
            text: "密码"
        },
        phone: {
            type: STRING(30),
            text: "电话"
        },
        nickname: {
            type: STRING(30),
            text: "昵称"
        },
        auth: {
            type: STRING(30),
            text: "权限"
        },
        imgUrl:{
            type: STRING(30),
            text: "头像"
        }
    }, {
        timestamps: false
    });
    // 数据库同步  User.sync({force: true})
    return User;
};