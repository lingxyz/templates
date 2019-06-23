// 首页
export async function index (ctx) {
	await ctx.render('index', {title: 'Koa-cli'})
}
