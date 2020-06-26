module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const Auth = app.model.define("auths", {
        id: {
            type: INTEGER,
            text: "id",
            primaryKey: true,
            autoIncrement: true,
        },
        roleId: {
            type: INTEGER,
            text: "角色id"
        },
        authId: {
            type: INTEGER,
            text: "权限id"
        },
        authName: {
            type: STRING(11),
            text: "权限名称"
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Auths',
        scopes: {
            proAttr: {
                attributes: ['authName']
            }
        }
    });
    // 数据库同步 
    return Auth;
};