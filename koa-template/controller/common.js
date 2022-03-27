/**
 * controller 通用方法
 */

//  标准化返回格式
export function apiReturn (code = 0, data = {}, msg = 'success') {
    return { code, data, msg }
}

// 正确返回
export const successReturn = (data = {}) => apiReturn(0, data)

// 错误返回
export const errorReturn = (data = {}, msg = 'error') => apiReturn(1, data, msg)


/**
 * 参数检查 data 传入的参数obj, rule 需要的参数obj
 */
export function check(ctx, data = {}, rule = []) {
    const keys = Object.keys(data)
    if (!keys.length) {
        ctx.body = errorReturn(404, '入参不能为空')
        return false
    }

    const missingArray = rule.filter(function(v, k) { 
        return keys.indexOf(v) == -1 
    })

    ctx.body = errorReturn(404, `入参不完整，缺少参数：${missingArray[0]}`)
    return !missingArray.length
}