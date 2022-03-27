/**
 * 日志中间件
 */
'use strict';

module.exports = () => {
	return async function log(ctx, next) {
		const log = {
			url: ctx.url,
			ip: ctx.ip,
			date: new Date(),
			data: ctx.request.body,
		}

		ctx.logger.info(log)

		await next()
	}
}