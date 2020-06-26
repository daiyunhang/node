module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const Role = app.model.define("role", {
        id: {
            type: INTEGER,
            text: "id",
            primaryKey: true,
            autoIncrement: true,
        },
        roleName: {
            type: STRING(30),
            text: "角色名称"
        },
        detail: {
            type: STRING(30),
            text: "备注"
        },
        createId: {
            type: INTEGER,
            text: "创建者id"
        },
        updateId: {
            type: INTEGER,
            text: "修改者id"
        },
        status: {
            type: INTEGER,
            text: "状态1-正常,0-删除"
        },
        createTime: {
            type: DATE,
            text: "添加时间"
        },
        updateTime: {
            type: DATE,
            text: "修改时间"
        },
        authId: {
            type: INTEGER,
            text: "权限id"
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Role',
        scopes: {
            proAttr: {
                attributes: ['authId', 'roleName']
            }
        }
    });

    Role.associate = function () {
        app.model.Role.hasMany(app.model.Auth, {
            foreignKey: 'AuthId',
            as: "Auths"
        });
        // app.model.Role.hasMany(app.model.Auth,{
        //     foreignKey:'authId',
        //     as:'Auths'
        // })
        // app.model.Role.hasOne(app.model.Auth, {
        //     foreignKey: 'authId'
        // });
        // app.model.Role.belongsTo(app.model.User, {
        //     foreignKey: 'roleId',
        //     as: "Users"
        // });
        // app.model.Role.belongsTo(app.model.Auth, {
        //     foreignKey: 'authId',
        //     as: "Auths"
        // })
        // Role.associate = function () {
        // foreignKey的值为：AuthGroup表的ID与auth_group_access（中间表）对应    的字段名,through为中间表的模型
        // app.model.Role.belongsToMany(app.model.User, {
        //     through: app.model.Auth,
        //     foreignKey: 'authId'
        // });


        // 测试
        // app.model.Role.belongsToMany(app.model.User, {
        //     foreginkey: "roleId",
        //     through: app.model.Auth,
        //     as:'Role'
        // })
    }


    // 数据库同步 Role.sync({force: true})

    return Role;
};