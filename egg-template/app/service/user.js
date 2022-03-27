// app/service/user.js
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
	// 根据 auth 查询 id
	async getId(where) {
		const res = await this.app.mysql.get('os_user', where)
		return res && res.id
	}

	// 根据id查询用户信息
	async getUserInfoById(id) {
		return await this.app.mysql.get('os_user', { id })
	}

	// 绑定手机号
	async bindMobile(userId, mobile) {
		const userInfo = await this.app.mysql.get('os_user', { id: userId })

		if (userInfo.mobile) {
			throw '手机号已存在';
		} else {
			return await this.app.mysql.update('os_user', { mobile }, {
				where: {
					id: userId,
				},
			});
		}
	}
}

module.exports = UserService;