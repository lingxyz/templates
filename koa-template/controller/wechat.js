// import WeChat from '../model/wechat'
// import Configer from '../model/configer'
// import AuthParams from '../model/auth-params'
// import sha1 from 'sha1'
// import { UserDB, TokenDB } from '../db'
// import {save} from '../model/pet'
import * as Wechat from '../common/wechat'

const appid = 'wx78946a3c1f7023ff'
const secret = 'f2ab5613d1a8a9602d27d25007f42af8'


// 授权
export async function authorize (ctx, next) {
	const redirect_uri = 'http://a.com'
	Wechat.authorize({appid, redirect_uri}, ctx)
}

// 通过code获取access_token和openid
export async function getAccessToken (ctx, next) {
	const { query } = ctx.request
	let code = query.code
	if (!code)	throw new Error('缺少参数：code')

	const data = await Wechat.getAccessToken({ appid, secret, code })

	ctx.body = {
		code: 0,
		data: data
	}
}

// 发送模板消息
export async function sendTemplateMessage (ctx, type) {
	const { query } = ctx.request
	// const a = await save()
	const redirect_uri = 'http://a.com'
	Wechat.authorize({appid, redirect_uri}, ctx)
	ctx.body = {
		a: 1
	}
}

// test
// export async function test (ctx, type) {
// 	const { query } = ctx.request
// 	const a = await save()
// 	ctx.body = {
// 		a: a
// 	}
// }

// const ServerHost = 'http://feapi.xsycloud.com.cn'

// // 由code获取用户信息 query 需包含 {state, code}
// export async function getUserInfo (ctx, next) {
// 	const { query } = ctx.request
// 	// 在授权之前保存的参数
// 	const queryParams = new AuthParams(query.state)

// 	if (queryParams.appId && query.code) {
// 		const wxApp = new WeChat({appId: queryParams.appId})
// 		let redirectUrl = wxApp.appConf.redirect
// 		let userInfo = await wxApp.getUserFromCode(query.code)
// 		// 只需要返回openid, brief控制是否是简要信息
// 		if (queryParams.brief) {
// 			userInfo = {
// 				subscribe: userInfo.subscribe,
// 				openid: userInfo.openid,
// 				nickname: userInfo.nickname,
// 			}
// 		}
// 		const encodeInfo = encodeURI(obj2Params(Object.assign(userInfo, queryParams)))

// 		// 如果请求中带有重定向URL则跳转该URL
// 		if (queryParams.redirect_uri) {
// 			redirectUrl = queryParams.redirect_uri
// 		}

// 		ctx.redirect(`${redirectUrl}?${encodeInfo}`)
// 	} else {
// 		throw new Error('此接口需传参数：appId, code')
// 	}
// }

// // 通过openId获取用户信息
// export async function getUserByOpenId (ctx, next) {
// 	const { query } = ctx.request

// 	if (query.openId) {
// 		ctx.body = await UserDB.findOneSync({openid: query.openId})
// 	} else {
// 		throw new Error('此接口需传参数：openId')
// 	}
// }

// // 授权入口可以多参数
// export function authRedirect (ctx) {
// 	const { query } = ctx.request

// 	if (query.appId) {
// 		const authParamsKey = sha1(JSON.stringify(query)).substring(0, 10)
// 		const url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
// 		const params = {
// 			appid: query.appId,
// 			redirect_uri: `${ServerHost}/wechat/getUserInfo`,
// 			response_type: 'code',
// 			scope: 'snsapi_base',
// 			state: `${authParamsKey}#wechat_redirect`,
// 		}
// 		const authParams = new AuthParams(authParamsKey)

// 		// 参数键值不存在公众号中
// 		if (authParams.notExist) {
// 			authParams.updateAuthParams(query)
// 		}

// 		ctx.redirect(`${url}?${obj2Params(params)}`)
// 	} else {
// 		throw new Error('此接口需传参数：appId')
// 	}
// }

// // 获取AccessToken
// export async function getAccessToken (ctx) {
// 	const { query } = ctx.request

// 	if (query.appId) {
// 		const wxApp = new WeChat(query)
// 		ctx.body = await wxApp.getAccessToken(query.type)
// 	} else {
// 		throw new Error('此接口需传参数：appId')
// 	}
// }

// // JS-API签名
// export async function getJsApiSignature (ctx) {
// 	const { query } = ctx.request
// 	ctx.body = await getSignature(ctx, query.type || 'jsapi')
// }

// // 添加公众号
// export async function addApp (ctx) {
// 	const { query, body } = ctx.request

// 	if (
// 		query.password === '123456' &&
// 		body.name &&
// 		body.appId &&
// 		body.appSecret
// 	) {
// 		const wxApp = new Configer({appId: body.appId})
// 		if (isEmpty(wxApp.appConf)) {
// 			// 默认值
// 			if (!body.redirect) body.redirect = ''
// 			if (!body.ipWhiteList) body.ipWhiteList = []
// 			// 插入配置
// 			wxApp.updateConfig(body)
// 			// 数据库添加token
// 			TokenDB.saveSync(body)
// 			ctx.body = '添加公众号成功'
// 		} else throw new Error('该appId配置已存在')
// 	} else {
// 		throw new Error('请填写添加密码和必填项[name, appId, appSecret]')
// 	}
// }

// // ============================= 测试接口 ================================

// // 微信卡券签名
// export async function getCardSignature (ctx) {
// 	ctx.body = await getSignature(ctx, 'card')
// }

// // 获取所有用户
// export async function getAllUsers (ctx, next) {
// 	ctx.body = await UserDB.findSync()
// }

// // 增加用户
// export async function addUser (ctx, next) {
// 	const { body } = ctx.request

// 	const addResult = await UserDB.saveSync(body)
// 	ctx.body = addResult
// }

// // 删除用户
// export async function deleteUser (ctx, next) {
// 	const { query } = ctx.request
// 	const deleteResult = await UserDB.removeSync({_id: query.id})

// 	if (!deleteResult.n) {
// 		ctx.body = deleteResult.n
// 	} else {
// 		throw new Error('用户已删除或用户不存在')
// 	}
// }
