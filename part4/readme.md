
<!-- 添加less解析 -->
#  npm i -D less less-loader css-loader style-loader

<!-- 添加到webpack.config.js  rule -->
rules: [{ 
  test: /\.less$/,
  use: [
    "style-loader",
    "css-loader",
    "less-loader"
  ]
}]
# npm i -D postcss postcss-loader postcss-preset-env

// 兼容老版本的IE ,IE10
// !!!!!!!!!!!重要，告诉webpack，不使用箭头函数, 不使用const
environment: {
  arrowFunction: false,
  const: false
}