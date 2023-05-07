const TerserPlugin = require('terser-webpack-plugin')

const path = require('path')
const rules = require('./loaders')
const plugins = require('./plugins')
const { mode, isProduction } = require('./util')

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].[fullhash].js',
    publicPath: '/'
  },
  module: {
    rules
  },
  devServer: {
    port: 3005,
    hot: true,
    compress: isProduction,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/sentry': 'http://localhost:3000/sentry'
    }

  },
  plugins,
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin()
    ]
  }
}
