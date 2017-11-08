var path = require('path')
var express = require('express')
import WebpackMiddlewares from './middlewares/webpack'
import routes from './routes'
import bodyParser from 'body-parser'

var app = express()

const getApp = (isDevelopment) => class App{
  static start(){
    app.set('port',(process.env.PORT || 1234))
    app.use(bodyParser.json())
    app.use('/api',routes)


    if(isDevelopment){

      app.use(WebpackMiddlewares.devMiddleware())
      app.use(WebpackMiddlewares.hotMiddleware())

      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../static/index.html'))
      })
    }
    else{
      app.use(express.static(__dirname + '../../dist'));
      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../dist/index.html'))
      })
    }
    app.listen(app.get('port'), function(err) {
      if (err) {
        return console.error(err)
      }
      console.log('Listening at http://localhost:'+ app.get('port'))
    })
  }
}

module.exports = getApp
