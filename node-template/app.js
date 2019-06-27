// 加载模块
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// 设置端口 (PORT=4000 node app.js)
var port = process.env.PORT || 3000
// express实例
var app = express()

// 设置视图根目录
app.set('views', './views/pages')
// 设置默认模板引擎
app.set('view engine', 'jade')
// 静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

// 表单数据格式化
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(jsonParser)
app.use(urlencodedParser)

// 监听端口
app.listen(port)
// 打印成功日志
console.log('>>>>>> node started on port ' + port);

// 路由
require('./routes')(app)


// mongoose
mongoose.connect('mongodb://52.197.59.55/test')
