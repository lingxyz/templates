let prod = process.env.NODE_ENV === 'production';

// 开发
module.exports = {
	// 开发目录
	source: 'src',

	// 产出目录
	output: 'dist',

	// 后缀名
	wpyExt: ".wpy",

	// eslint
	eslint: true,

	// es6 to es5
	compilers: {
		babel: {
			sourceMap: true,
			presets: [
				"es2015",
				"stage-1"
			],
			plugins: [
				"transform-export-extensions",
				"syntax-export-extensions"
			]
		}
	}

}

// 产出
if (prod) {
	delete module.exports.compilers.babel.sourcesMap;

	// 压缩sass
	module.exports.compilers['sass'] = {outputStyle: 'compressed'}

	module.exports.plugins = {
		// js压缩
		uglifyjs: {
			filter: /\.js$/,
			config: {
			}
		},

		// 图片压缩
		imagemin: {
			filter: /\.(jpg|png|jpge)$/,
			config: {
				jpg: {
					quality: 80
				},
				png: {
					quality: 80
				}
			}
		}
	}
}

