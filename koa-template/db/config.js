// const IS_PRO = process.env.NODE_ENV !== 'development'
// const host = IS_PRO ? 'localhost:20610' : 'ip:20610'

export default {
	// mongoose: `mongodb://wechatServer:wechatApi456@${host}/wechatApi`,
	mysql: {
		database: 'test', // 数据库名
		username: '', // 用户名
		password: '', // 密码
		host: 'localhost', // 主机名
		port: 3306 // 端口号，MySQL默认3306
	}
}
