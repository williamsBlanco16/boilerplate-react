const { isProduction, mode, logFileExist } = require('./util')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html'
})
const miniCssPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash].css'
})
const dotenvPlugin = () => {
  const filePath = './env-config/.env.' + mode
  logFileExist(filePath)

  return new Dotenv({
    path: filePath,
    systemvars: true
  })
}
module.exports = [
  htmlPlugin,
  miniCssPlugin,
  !isProduction && new ReactRefreshWebpackPlugin(),
  dotenvPlugin()
].filter(Boolean)
