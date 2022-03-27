import Sequelize from 'sequelize'
import config from './config'

// 连接数据库
export const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    {
        host: config.mysql.host,
        dialect: 'mysql',
        pool: {
            max: 100,
            min: 0,
            idle: 30000
        },
        timezone: '+08:00'  // 时间转换
    }
)
console.log('mysql数据库连接成功')


// 标准化数据库字段
export function defineModel(name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    attrs.id = {
        type: Sequelize.STRING(50),
        primaryKey: true
    };
    // attrs.createdAt = {
    //     type: Sequelize.BIGINT,
    //     allowNull: false
    // };
    // attrs.updatedAt = {
    //     type: Sequelize.BIGINT,
    //     allowNull: false
    // };
    // attrs.version = {
    //     type: Sequelize.BIGINT,
    //     allowNull: false
    // };
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        freezeTableName: true,  // Model 对应的表名将与model名相同
        // hooks: {
        //     beforeValidate: function (obj) {
        //         let now = Date.now();
        //         if (obj.isNewRecord) {
        //             if (!obj.id) {
        //                 obj.id = generateId();
        //             }
        //             obj.createdAt = now;
        //             obj.updatedAt = now;
        //             obj.version = 0;
        //         } else {
        //             obj.updatedAt = Date.now();
        //             obj.version++;
        //         }
        //     }
        // }
    });
}
