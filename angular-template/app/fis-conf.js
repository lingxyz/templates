// fis.match('**', {
//     deploy: [
//         fis.plugin('replace', {
//             from: /\{\{\_\_VERSION\_\_\}\}/g,
//             to: function ($0) {
//                 return '?mw=' + Date.now();
//             }
//         }),
//         fis.plugin('local-deliver')
//     ]
// });

/* Pretreatment 预处理 */

// less 2 css
fis.match('*.less', {
    parser: 'less2',
    rExt: '.css'
});

/**
 * fis-parser-node-sass
 * 支持 sass/scss 编译成 css
 */
fis.match('*.sass', {
  rExt: '.css',
  parser: fis.plugin('node-sass')
});

// es6 2 es5
fis.set('project.fileType.text', 'es6');
fis.match('*.es6', {
    rExt: '.js',
    parser: fis.plugin('es6-babel', {})
});

// query 资源定位
fis.set('new date', Date.now());





/* 模块化加载 */
fis.match('::package', {
  postpackager: fis.plugin('loader', {})
});

fis.hook('commonjs', {
  packages: [
    {
      name: 'mod',
      location: '/common/mod'
    },
    {
      name: 'lib',
      location: '/common/lib'
    },
    {
      name: 'widget',
      location: '/common/widget'
    },
    {
      name: 'ctrl',
      location: '/static/controller'
    }
  ]
});

/* 同名依赖 */
fis.match('*', {
    useSameNameRequire: true    //同名依赖
});



// pack 打包
fis.media('o')
    // 启用打包插件，必须匹配 ::package
.match('::package', {
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
})

/* deploy 产出 */
// release 自动到dev
// fis.match('*', {
//   deploy: fis.plugin('local-deliver', {
//     to: '../../mwwebapi/src/public/dev'
//   })
// })

// fis3 release local 产出到本地和测试环境
fis.media('local').match('*', {
  deploy: fis.plugin('local-deliver', {
    to: '../../../dist/public/dist'
  })
})

// fis3 release public 产出到线上
fis.media('public').match('*', {
  deploy: fis.plugin('local-deliver', {
    to: '../dist'
  })
})
// 不产出此文件
.match('/index.html', {
  release: false
})

// optimize 优化
.match('*.html', {
    optimizer: fis.plugin('htmlmin', {
        mangle: {
            // expect: ['require', 'define', 'some string'] // 不想被压的
        }
    })
})
.match('*.js', {
    optimizer: fis.plugin('uglify-js', {
        mangle: {
            except: '$scope'    //$scope不压缩（directive中controller必须传入$scope）
        }
    })
})
.match('*.{css,less,sass}', {
    optimizer: fis.plugin('clean-css', {
        // 'keepBreaks': true //保持一个规则一个换行
    })
})
.match('*.png', {   // fis-optimizer-png-compressor 插件进行压缩png
    optimizer: fis.plugin('png-compressor')
})
// md5
.match('*', {
    useHash: false
})
// query 资源定位
.match('*', {
      query: '?mw=' + fis.get('new date')
      // query: '?mw=1.9.6'
});

// fis3 release qa 上传到测试机 未配置
fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://cq.01.p.p.baidu.com:8888/receiver.php',
    to: '/home/work/htdocs' // 注意这个是指的是测试机器的路径，而非本地机器
  })
});