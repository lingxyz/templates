'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
	// 用id查询用户信息
	async getUserInfoById() {
		const createRule = {
			id: { type: 'string' },
		}

		if (this.ctx.valid(createRule)) {
			const { id } = this.ctx.request.query;

			try {
				const response = await this.service.user.getUserInfoById(id);
				this.ctx.success(response);
			} catch (e) {
				this.error(e);
			}
		}
	}

	// 绑定手机号
	async bindMobile() {
		const createRule = {
			mobile: { type: 'string' },
		}

		if (this.ctx.valid(createRule, 1)) {
			const { userId } = this.ctx.state;
			const { mobile } = this.ctx.request.body;

			try {
				const response = await this.service.user.bindMobile(userId, mobile);
				if (response) this.ctx.success(true);
			} catch (e) {
				this.error(e);
			}
		}
	}
}

module.exports = UserController;