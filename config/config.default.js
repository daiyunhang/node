/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 解决跨域
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591435656621_4372';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: "mysql",
      host: "152.136.217.197",
      port: 3306,
      username: "root",
      password: "123456",
      database: "hang_star"
    }
  };


  // jwt
  config.jwt = {
    secret: '123456',
    // secret: 'Great4-M',
    enable: false, // default is false
    match: /^\/api/, // optional
  }

  return {
    ...config,
    ...userConfig,
  };
};
