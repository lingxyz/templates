import path from 'path'
import sha1 from 'sha1'
import log4js from 'log4js'

const IS_PRO = process.env.NODE_ENV !== 'development'

// 判断所有数据类型是否为空
export function isEmpty (value) {
	const type = getType(value)

	switch (type) {
		case 'object':
			return Object.keys(value).length === 0
		case 'array':
			return value.length === 0
		case 'number':
			return !isNaN(value)
		default:
			return !!value
	}
}

// 解析链接中的数据
export function parseUrl (url) {
	url = url || window.location.href

	const splitUrl = url.split('?')
	const [link, params] = splitUrl

	if (params) {
		const result = {url: link}
		const _params = params.split('&')
		_params.forEach(item => {
			const [name, key] = item.split('=')
			result[name] = decodeURIComponent(key)
		})
		return result
	} else return {}
}

// 对象转form数据
// 举个栗子 {name: 'woolson', msg: 'hello'} => name=woolson&msg=hello
export function obj2Params (data) {
	if (getType(data) !== 'object') {
		console.error('function obj2Params receive a nonsupport type parameter.')
		return
	}

	return resolveObj(data).join('&')
}

export function resolveObj (obj, parents) {
	var result = []
	var parentsStr = ''

	if (parents) parentsStr = parents.join('.') + '.'
	else parents = []

	Object.keys(obj).forEach(function (key) {
		switch (getType(obj[key])) {
			case 'object':
				var insetObj = resolveObj(obj[key], parents.concat([key]))
				result = result.concat(insetObj)
				break
			case 'array':
				result.push(parentsStr + key + '=' + obj[key].join())
				break
			default:
				result.push(parentsStr + key + '=' + obj[key])
				break
		}
	})
	return result
}

// 获取数据具体类型
// 举个栗子: 'string', 'object', 'number', 'null', 'undefined'
export function getType (value) {
	var typer = Object.prototype.toString
	var typeStr = typer.call(value)

	typeStr = typeStr.replace(/.*\s(\w+)\]/g, '$1')
	return typeStr.toLowerCase()
}

export class Moment {
	constructor (date) {
		this.date = date || ''
		this.dateObj = date ? new Date(date) : new Date()

		if (this.dateObj === 'Invalid Date') {
			logger.error(`[utils moment] ${date} 不是合法的日期`)
			this.error = true
			return ''
		}

		this.fullYear = this.dateObj.getFullYear()
		this.year = String(this.fullYear).substr(2)
		this.month = this.dateObj.getMonth() + 1
		this.day = this.dateObj.getDate()
		this.hour = this.dateObj.getHours()
		this.minute = this.dateObj.getMinutes()
		this.second = this.dateObj.getSeconds()
		this.mTimeStamp = this.dateObj.getTime()
		this.timeStamp = Math.round(this.mTimeStamp / 1000)
	}

	format (template = 'YYYY-MM-DD') {
		// 错误直接返回
		if (this.error) return this.date

		let result = template
		const items = [
			{ key: 'YYYY', value: this.fullYear },					// 2017年
			{ key: 'YY', value: this.year },						// 17年
			{ key: 'MM', value: ('0' + this.month).substr(-2) },	// 02月
			{ key: 'M', value: this.month },						// 2月
			{ key: 'DD', value: ('0' + this.day).substr(-2) },		// 02号
			{ key: 'dd', value: this.day },							// 2号
			{ key: 'HH', value: ('0' + this.hour).substr(-2) },		// 24小时制02点
			{ key: 'H', value: this.hour },							// 24小时制2点
			{ key: 'mm', value: ('0' + this.minute).substr(-2) },	// 02分
			{ key: 'm', value: this.minute },						// 2分
			{ key: 'SS', value: ('0' + this.second).substr(-2) },	// 02秒
			{ key: 'S', value: this.second },						// 2秒
			{ key: 'X', value: this.timeStamp },					// 1507878591时间戳(单位：秒)
			{ key: 'x', value: this.mTimeStamp },					// 1507878591062时间戳(单位：毫秒)
		]

		items.forEach(item => {
			result = result.replace(item.key, item.value)
		})

		return isNaN(result) ? result : Number(result)
	}
}

// 日期格式化
export const moment = (date) => new Moment(date)

// 随机字符串
export function randomStr (length = 16) {
	const character = '00123456789abcdefghigklmnopqrstuvwxyzzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let result = ''

	for (let i = 0; i < length; i++) {
		result += character[Math.round(Math.random() * 64)] || 'x'
	}

	return result
}

// 签名
export function signParams (params) {
	if (getType(params) !== 'object') {
		console.error('Utils has error in signParams function, params isn\'t a object')
		return
	}

	const keys = Object.keys(params).sort()
	const sortedParams = {}
	keys.forEach(o => (sortedParams[o] = params[o]))

	return sha1(obj2Params(sortedParams))
}

// 配置logger
log4js.configure({
	appenders: {
		wechat: {
			type: 'dateFile',
			filename: path.join(__dirname, '../logs/wechat'),
			pattern: '.yyyy-MM-dd.log',
			alwaysIncludePattern: true,
		},
	},
	categories: {
		default: {
			appenders: ['wechat'],
			level: IS_PRO ? 'info' : 'info',
		},
	},
})

export const logger = log4js.getLogger('wechat')

// mongoose同步函数
export function syncMongoFunc (schema, modelName, methods) {
	methods.forEach(method => {
		// 保存执行方式不同
		const isSave = method === 'save'
		schema.methods[`${method}Sync`] = function () {
			const args = Array.from(arguments)

			return new Promise((resolve, reject) => {
				const callBack = (err, docs) => {
					if (err) reject(err)
					else resolve(docs)
				}

				if (isSave) {
					const SaveModel = this.model(modelName)
					const newItem = new SaveModel(args[0])
					newItem.save(callBack)
				} else {
					args.push(callBack)
					this.model(modelName)[method](...args)
				}
			})
		}
	})
}
