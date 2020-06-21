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
  router.get('/api/user', controller.user.index)
  router.post('/api/userEdit', controller.user.edit)



  // router.get('/api/user_info', controller.user.getUser);
};
