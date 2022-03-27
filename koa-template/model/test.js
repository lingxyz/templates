import Models from './models'
import Common from './common'

const TestDB = Models.Test

export default class Test extends Common {
	constructor () {
		super()
    }

    async save ({name, gender = false, birth}) {
        var now = Date.now()
        const data = await TestDB.create(Object.assign({
            id: 'g-' + now,
            createdAt: now,
            updatedAt: now,
            version: 0
        }, {name, gender, birth}))

        return data
    }

    async findAll () {
        const data = await TestDB.findAll()
        return data
    }
}
