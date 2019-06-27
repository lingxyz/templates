// 模式
var mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema({
  doctor: String,
  title: String,
  language: String,
  country: String,
  summary: String,
  flash: String,
  poster: String,
  year: Number,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// 每次保存之前调用
MovieSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
})

// 增加静态方法 可在 Modal 和 Entity 中调用
MovieSchema.statics = {
  fetch: function(cb) {
    return this
      .find({}) // 查询所有数据
      .sort('meta.updateAt')  // 按照更新时间排序
      .exec(cb)  // 执行回调方法
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}

module.exports = MovieSchema
