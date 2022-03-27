import mongoose from 'mongoose'
import config from './config'
import { logger } from '../common/utils'
// Models
import UserModel from './users'
import TokenModel from './token'

const option = {
	useMongoClient: true,
}

const IS_PRO = process.env.NODE_ENV !== 'development'

mongoose.connect(config.address, option, (error, err) => {
	const msgPrefix = error ? 'mongoose数据库连接失败' : 'mongoose数据库链接成功'
	IS_PRO ? logger.info(msgPrefix) : console.log(msgPrefix)
})

export const TokenDB = new TokenModel()
export const UserDB = new UserModel()
