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

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591435656621_4372';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: "mysql",
      host: "rm-2zel8l677nq87f0353o.mysql.rds.aliyuncs.com",
      port: 3306,
      username: "lucas",
      password: "Daiyunhang01",
      database: "hang_star"
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
