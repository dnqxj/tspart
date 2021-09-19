// 引入一个包
const path = require('path');

// 二、引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中的所有配置信息都应该放在module。exports中 
module.exports = {
  mode: 'development',
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),

    // 打包后文件的名字
    filename: 'bundle.js',

    // !!!!!!!!!!!重要，告诉webpack，不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },

  // 执行webpack打包时要使用的模块
  module: {
    // 指定要loader（加载）的规则
    rules: [
      {
        // test 指定的时规则生效的文件
        // 下面两句，使用ts-loader去处理.ts文件
        test: /\.ts$/,
        use: [
          // 'babel-loader', 需要配置,配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      // 秒杀一切,老版本,不支持const
                      "ie": "11"
                    },
                    // 指定corejs的版本,ie中没有promise,这里corejs就会加载到里面,秒啊
                    "corejs": "3",
                    // 使用corejs的方式,usage 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          // ts-loader放到后面,先执行,将ts->js,再将js->放到旧版
          'ts-loader' 
        ],
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: '自定义title'
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
};