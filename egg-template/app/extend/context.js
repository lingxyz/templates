/**
 * Context 框架扩展
 */
'use strict';

module.exports = {
	// 正确返回
	success(data = null, code = 0, msg = 'Scuess!') {
		this.body = { code, data, msg }
	},

	// 错误返回
	error(msg = 'error', code = 1, data = null) {
		this.body = { code, data, msg }
	},

	// 校验参数，第二个参数不传默认query
	valid(rule, body) {
		try {
			this.validate(rule, body ? '' : this.request.query)
		} catch (err) {
			this.logger.warn(err.errors)
			this.error(err.errors);
			return false
		}

		return true
	},
};
