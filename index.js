import getApp from './src/server/App'

const isDevelopment = process.argv.indexOf('--dev') !== -1
getApp(isDevelopment).start()
