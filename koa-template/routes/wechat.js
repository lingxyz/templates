import KoaRouter from 'koa-router'
import * as WechatCtrl from '../controller/wechat'

const router = KoaRouter()

router.prefix('/wechat')

// 授权
router.get('/authorize', WechatCtrl.authorize)
// 获取token
router.get('/getAccessToken', WechatCtrl.getAccessToken)
// 发送模板消息
router.get('/sendTemplateMessage', WechatCtrl.sendTemplateMessage)
// router.get('/test', WechatCtrl.test)

export default router
