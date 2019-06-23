// define Model
import Sequelize from 'sequelize'
import { defineModel } from '../../db/mysql'

module.exports = defineModel('test', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false,
    freezeTableName: true // Model 对应的表名将与model名相同
})