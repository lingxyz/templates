/**
 * api router
 */
import KoaRouter from 'koa-router'
import * as ApiCtrl from '../controller/api'

const router = KoaRouter()

router.prefix('/api')

// test url: http://localhost:3000/api/testSave?name=2&gender=2&birth=123123
router.get('/testSave', ApiCtrl.testSave)
// test url: http://localhost:3000/api/testFindAll
router.get('/testFindAll', ApiCtrl.testFindAll)

export default router
