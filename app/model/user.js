module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const User = app.model.define("users", {
        id: {
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
        roleId: {
            type: INTEGER,
            text: "角色"
        },
        imgUrl: {
            type: STRING(30),
            text: "头像"
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Users',
    });

    User.associate = function () {
        // app.model.User.hasOne(app.model.Role, { 
        //     foreignKey: 'roleId',
        //     as:'Role'
        // });
        // app.model.User.hasMany(app.model.Auth,{
        //     foreignKey:'authId',
        //     as:'Auths'
        // })

        // app.model.User.belongsToMany(app.model.Auth, {through: 'Role',oreignKey: 'authId',  as:'Role'});
        app.model.User.belongsTo(app.model.Role, {
            foreignKey: 'roleId',
            as: "Role"
        });



        // foreignKey的值为：User表的authId与role（中间表）对应的字段名,through为中间表的模型
        // app.model.User.belongsToMany(app.model.Role, { 
        //     through: app.model.Auth, 
        //     foreignKey: 'authId', 
        //     otherKey: 'roleId' ,
        //     as:'Role'
        // }); 



    }

    return User;
};