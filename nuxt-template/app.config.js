/**
 * 项目配置
 */

// is use mock.js to intercepting data request
export const isMock = localStorage.mock

// fundebug api key
export const fundebugApiKey = '??????'

// switch env to set different variables
let apiBase

switch (process.env.ENV) {
	case 'development':
		apiBase = ''
		break
	case 'test':
		apiBase = ''
		break
	case 'production':
		apiBase = ''
		break
}

// ajax base url
export const baseUrl = apiBase