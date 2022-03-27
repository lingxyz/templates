/**
 * 批量加载 tables
 */
import fs from 'fs'
import { sequelize } from '../../db/mysql'

let files = fs.readdirSync(__dirname)

let js_files = files.filter((f)=>{
    return f.endsWith('.js')
}, files)

for (let f of js_files) {
    console.log(`import tables from file ${f}...`)
    let name = f.substring(0, f.length - 3)
    module.exports[name] = require(__dirname + '/' + f)
}

// 首次运行自动创建表
sequelize.sync()

console.log('init mysql tables ok.')
