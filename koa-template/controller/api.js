/**
 * api controller
 */
import { successReturn, errorReturn, check } from './common'
import TestModel from '../model/test'
const TestModels = new TestModel()

export async function testSave (ctx, next) {
	const { query, body } = ctx.request

	const data = await TestModels.save({
        name: query.name || 'Gaffey',
        gender: query.gender || false,
        birth: query.birth || '2007-07-07'
    })

    if (check(ctx, query, ['name', 'gender', 'birth'])) {
	    ctx.body = successReturn({ query, body, data })
    }
}

export async function testFindAll (ctx, next) {
	const { query, body } = ctx.request

	const data = await TestModels.findAll()

	ctx.body = successReturn({ query, body, data })
}