'use strict';

// 使用 mysql 插件
exports.mysql = {
	enable: true,
	package: 'egg-mysql',
};

// 使用 Validate 插件进行参数校验
exports.validate = {
	enable: true,
	package: 'egg-validate',
};