/**
 * server logs
 */
import KoaRouter from 'koa-router'
import * as LogsCtrl from '../controller/logs'

const router = KoaRouter()

router.prefix('/logs')

router.get('/', LogsCtrl.getLogList)

router.get('/:name', LogsCtrl.getLogDetail)

export default router
