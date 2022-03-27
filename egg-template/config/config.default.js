/**
 * 默认配置，所有环境均会加载
 */
'use strict';

module.exports = appInfo => {

	const config = {
		// use for cookie sign key, should change to your own and keep security
		keys: appInfo.name + '_1522934522484_3160',

		// 中间件配置
		middleware: [ 'cros', 'log' ],

		/* 插件配置 */
		// mysql
		mysql: {
			// 单数据库信息配置
			client: {
				// host
				host: '127.0.0.1',
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
		},
		// 关闭 csrfToken 验证
		security: {
			csrf: {
				enable: false,
			},
		},

		/* 开发配置 */
		// 常见code返回码配置（需与前端协商，方便前端对ajax返回后的数据格式对应的行为进行统一封装）
		code: {
			scuess: 0,	// 成功
			noAuth: -1,	// 没有权限（一般情况下指token鉴权失败）
		},
		// 常见消息
		msg: {
			success: 'Success!',	// 请求成功
			noAuth: 'Access denied!',	// 没有权限
			noEdit: 'Data editing failed',	// 数据更改失败
		},
		// 分页默认条数
		pageSize: 20,
	};

	return config;
};
