import fs from 'fs'
import path from 'path'

function resolve (filePath) {
	return path.join(__dirname, filePath)
}

// 日志列表
export async function getLogList (ctx) {
	const list = fs.readdirSync(resolve('../logs'))
	await ctx.render('logs', {list, title: 'Log list'})
}

// 日志详情
export async function getLogDetail (ctx) {
	const fileName = ctx.params.name
	const filePath = resolve(`../logs/${fileName}`)

	if (fs.existsSync(filePath)) {
		ctx.body = fs.readFileSync(filePath, 'utf-8')
	} else {
		ctx.body = 'The log file does not exist or has been deleted.'
	}
}
