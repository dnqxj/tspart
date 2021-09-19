<!-- 初始化 -->
# npm init -y
<!-- 安装包 -->
# cnpm i -D webpack webpack-cli typescript ts-loader
<!-- 配置webpack -->
# webpack.config.js
<!-- 配置tsconfig -->
# tsconfig.json
<!-- 在package.json加上build命令 -->
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },

<!-- 之前打包的只是解析 -->
<!-- 生成想要的html文件，可直接放到服务器上使用 -->
# cnpm i -D html-webpack-plugin

<!-- webpack.config.js添加 -->
// 配置webpack插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HTMLWebpackPlugin(),
  ]
}

<!-- 安装热更新服务器，用于开发 -->
# cnpm i -D webpack-dev-server
<!-- 设置命令 -->
  "scripts": {
    "start": "webpack server --open chrome.exe"
  },

<!-- 解决dist文件是覆盖而不是整个重新替换问题 -->
# cnpm i -d clean-webpack-plugin
// webpack.config.js
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
  ]
}

<!-- 引入模块时，需要配置后缀 -->
// webpack.config.js
  // 用来设置引用模块
module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  }
}

<!-- 安装babel -->
# cnpm i -D @babel/core @babel/preset-env babel-loader core-js
# 改配置文件

// 告诉webpack，不使用箭头函数,使用兼容ie的配置后，任然不能兼容ie。因为输出了箭头函数。通过添加这个配置
input{
  environment: {
    arrowFunction: false
  }
}