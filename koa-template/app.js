import path from 'path'
import Koa from 'koa'
import views from 'koa-views'
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import koaLogger from 'koa-logger'

import mysql from './db/mysql'
import routes from './routes'

const app = new Koa()

app.use(bodyparser({
	enableTypes: ['json', 'form', 'text'],
}))
app.use(json({pretty: false}))
app.use(koaLogger())
app.use(require('koa-static')(path.join(__dirname, 'public')))
app.use(views(path.join(__dirname, 'views'), {
	extension: 'pug',
}))

// 路由
routes(app)

module.exports = app
