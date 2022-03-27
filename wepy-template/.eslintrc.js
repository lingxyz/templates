module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  'globals': {
      'wx': true
  },
  // 代码验证规则
  'rules': {
    // 句末不加分号
    "semi": ["error", "never"],
    // 允许箭头函数不返回值
    "no-return-assign": 0,
    //缩进风格
    "indent": [2, 4],
    // 箭头函数用小括号括起来
    'arrow-parens': 0,
    // 生成器函数*的前后空格
    'generator-star-spacing': 0,
    // 函数定义时括号前面不要有空格
    'space-before-function-paren': 0,
    // 语句块行首是否加空行
    'padded-blocks': ["error", "never"],
    // 忽略数组最后逗号
    "comma-dangle": ["error", "ignore"],
    // 在 production 环境不允许 console 调试代码
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 在 production 环境不允许 debugger 调试代码
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
