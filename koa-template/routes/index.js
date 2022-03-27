/**
 * 路由总入口
 */
import PagesRoute from './pages'
import ApiRoute from './api'
import WechatRoute from './wechat'
import LogsRoute from './logs'

export default function (app) {
    app.use(PagesRoute.routes(), PagesRoute.allowedMethods())
    app.use(ApiRoute.routes(), ApiRoute.allowedMethods())
    app.use(WechatRoute.routes(), WechatRoute.allowedMethods())
    app.use(LogsRoute.routes(), LogsRoute.allowedMethods())
}