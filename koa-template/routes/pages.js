/**
 * HTML Pages
 */
import KoaRouter from 'koa-router'
import * as PagesCtrl from '../controller/pages'

const router = KoaRouter()

router.prefix('/')

router.get('/', PagesCtrl.index)

export default router
