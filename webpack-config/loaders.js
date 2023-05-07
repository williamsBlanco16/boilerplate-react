const { isProduction } = require('./util')
const MiniCssExtractPluginLoader = require('mini-css-extract-plugin').loader

const babelRule = {
  test: /\.(js|jsx)$/i,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env'
      ]
    }
  }
}

const cssRule = {
  test: /\.css/i,
  use: [
    MiniCssExtractPluginLoader,
    'css-loader'
  ]
}

const imagesRule = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource'
}
const fastRefresh = {
  test: /\.[jt]sx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: {
        plugins: [!isProduction && require.resolve('react-refresh/babel')].filter(Boolean)
      }
    }
  ]
}
module.exports = [
  babelRule,
  cssRule,
  imagesRule,
  fastRefresh
]
