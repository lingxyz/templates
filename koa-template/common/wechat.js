/**
 * 微信 api 封装
 */

 import fs from 'fs'
 import sha1 from 'sha1'

 import { post, get } from './fetch'
 import { obj2Params } from '../common/utils'


// 授权，获取code
export function authorize ({appid, redirect_uri, scope = 'snsapi_base', state = ''}, ctx) {
	const url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
	const params = {
		appid: appid,
		redirect_uri: encodeURIComponent(redirect_uri),
		response_type: 'code',
		scope: scope,
		state: `${state}#wechat_redirect`,
	}
    console.log(params);

	ctx.redirect(`${url}?${obj2Params(params)}`)
}

/**
 * 通过code换取网页授权access_token openid
 * @param  {String} appid       开发者id
 * @param  {String} secret      开发者密码
 * @param  {String} code        微信授权获取的code
 */
export async function getAccessToken ({ appid, secret, code }) {
    const url = `https://api.weixin.qq.com/sns/oauth2/access_token`
    const param = {
        appid: appid,
        secret: secret,
        code: code,
        grant_type: 'authorization_code',
    }
console.log(param)
    return get(url, param).then(data => data)
}


/**
 * 获取接口调用凭据：access_token
 * @param  {String} appid     开发者id
 * @param  {String} secret    开发者密码
 * @return {String} token     接口调用凭据
 */
// export function getToken ({ appid, secret }) {
//     // 从微信获取token
//     function fetchToken () {
//         const url = `https://api.weixin.qq.com/cgi-bin/token`
//         const param = {
//             grant_type: 'client_credential',
//             appid: appid,
//             secret: secret,
//         }
//
//         return get(url, param).then(data => data.access_token)
//     }
//
//     const data = fs.readFileSync('../public/wechat_token')
//     if (Date.now() - data.updateTime > 7200000) {   // >2h
//         const token = await fetchToken()
//         const tokenData = {
//             token: token,
//             updateTime: Date.now()
//         }
//         fs.writeFileSync('../public/wechat_token', tokenData.toString())
//         return token
//     }
//
//     return data.token
// }


/**
 * [发送模板消息]
 * @param  {String} accessToken [description] 微信token
 * @param  {Object} [data={}]   [description] 模板消息数据，参照 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1433751277
 * eg. data = {
 *  touser,         // 接收者openid
 *  template_id,    // 模板ID
 *  data: {}        // 模板数据
 * }
 */
export function sendTemplateMessage (accessToken, data = {}) {
    const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${accessToken}`
    return post (url, data)
}
