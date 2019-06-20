/**
 * @param {Egg.Application} app - egg application
 */
'use strict';

module.exports = app => {
	const { router, controller } = app;
	const auth = app.middleware.auth();	// 登录验证

	// 首页
	router.get('/', controller.home.index);
	// 用户相关
	router.get('/user/info', controller.user.getUserInfoById);	// 查询用户信息
	router.post('/user/bindMobile', auth, controller.user.bindMobile);	// 绑定手机号
};