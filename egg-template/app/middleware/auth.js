/**
 * 登录验证
 */
'use strict';

// 登录限制 已登录返回user id 未登录返回false
async function limitLogin(ctx, data = {}) {
	if (data.token) {
		const where = { token: data.token }
		return await ctx.service.user.getId(where)
	}
}

module.exports = () => {
	return async function auth(ctx, next) {
		const id = await limitLogin(ctx, ctx.query)
		const config = ctx.app.config
		console.log('id: ', id);

		if (!id) {
			ctx.body = {
				code: config.code.noAuth,
				data: null,
				msg: config.msg.noAuth,
			}
			return
		}

		ctx.state.userId = id
		await next()
	}
}