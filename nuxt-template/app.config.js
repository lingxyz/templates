/**
 * 项目配置
 */

const config = {
  // dev 环境配置
  dev: {
    // ajax base url
    baseUrl: '',
    // mock数据提供者：https://yapi-dev.shinho.net.cn
    mockUrl: 'https://yapi-dev.shinho.net.cn/mock/2814/syj-wechat-api',
    // 是否开启请求数据模拟
    isMock: localStorage.mock,
    // fundebug 开启静默模式
    fundebugSilent: true,
    // fundebug api key
    fundebugApiKey: '61394783fa249c9eee8a3dc788b31d62d262880f236715a482c74293d5b947c3',


  },
  // test 环境配置
  test: {
    // fundebug 开启静默模式
    fundebugSilent: true,
    // fundebug api key
    fundebugApiKey: '61394783fa249c9eee8a3dc788b31d62d262880f236715a482c74293d5b947c3',
  },
  // uat 环境配置
  uat: {
    // fundebug 开启静默模式
    fundebugSilent: true,
    // fundebug api key
    fundebugApiKey: '61394783fa249c9eee8a3dc788b31d62d262880f236715a482c74293d5b947c3',
  },
  // prd 环境配置
  prd: {
    // fundebug 开启静默模式
    fundebugSilent: false,
    // fundebug api key
    fundebugApiKey: '61394783fa249c9eee8a3dc788b31d62d262880f236715a482c74293d5b947c3'

  }
}[process.env.NODE_ENV]

if (config.isMock && process.env.NODE_ENV === 'dev') config.baseUrl = config.mockUrl

export const baseUrl = config.baseUrl
export const fundebugSilent = config.fundebugSilent
export const fundebugApiKey = config.fundebugApiKey
