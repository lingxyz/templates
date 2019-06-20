/**
 * 生产配置，会覆盖 config.default.js 中同名配置
 */
'use strict';

module.exports = appInfo => {
	const config = exports = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1522934522484_3160';

	// add your config here
	config.middleware = [ 'cros', 'log' ];

	// mysql
	config.mysql = {
		// 单数据库信息配置
		client: {
			// host
			host: 'localhost',
			// 端口号
			port: '3306',
			// 用户名
			user: 'zhangling',
			// 密码
			password: '000000',
			// 数据库名
			database: 'zhangling',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};

	// 关闭 csrfToken 验证
	config.security = {
		csrf: {
			enable: false,
		},
	}

	return config;
};