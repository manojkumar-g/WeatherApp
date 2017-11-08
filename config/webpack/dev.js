var commonConfig = require('./common.js')
var helpers = require('../helpers')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackMerge = require('webpack-merge')
var webpack = require('webpack')

 let conf= webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry : {
    app:['webpack-hot-middleware/client',
          'react-hot-loader/patch',
          helpers.root('/src/client/index.js')],
  },
  output: {
    path: helpers.root('static'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
})


module.exports = conf
