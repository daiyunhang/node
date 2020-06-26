'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/login', controller.login.login);
  router.get('/api/loginOut', controller.login.loginOut);
  
  // 以下需要jwt验证
  router.all('/*', app.middleware.headerAddAuthorization());
  router.get('/api/getUser', controller.user.index) // 查询
  router.post('/api/createUser', controller.user.create) // 新增
  router.post('/api/removeUser', controller.user.remove) // 删除
  router.post('/api/editUser', controller.user.edit)  // 修改

  router.get('/api/getAuth', controller.auth.index) // 获取所有权限



  // router.get('/api/user_info', controller.user.getUser);
};
