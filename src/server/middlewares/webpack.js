import webpack from 'webpack'
import config from './../../../config/webpack/dev'


let path =config.output.publicPath
let compiler = webpack(config)

module.exports = class WebpackMiddlewares{
  static devMiddleware(config){
    return require('webpack-dev-middleware')(compiler, {
      publicPath: path,
      hot : true,
      noInfo : true,
      stats: {
          colors: true
        }
    });
  }
  static hotMiddleware(){
    return require('webpack-hot-middleware')(compiler);
  }
}
