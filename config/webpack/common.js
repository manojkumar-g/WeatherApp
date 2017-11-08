var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var helpers = require('../helpers')
const jeet = require('jeet');
const rupture = require('rupture');
const axis = require('axis');
const autoprefix = require('autoprefixer-stylus');

let conf = {
  entry: {
    'vendor': ['./src/client/vendor.js','./src/client/polyfills.js'],
    'app': './src/client/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              presets:[
                ["env", {"modules": false}],
                "react"],
            plugins: [
              "react-hot-loader/babel",
              "transform-class-properties",
              'transform-object-rest-spread'
            ]
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [jeet(),rupture(),axis(),autoprefix()]
            }
          },
        ],
    },
    {
        test: /\.html$/,
        loader: 'html-loader'

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
module.exports = conf
