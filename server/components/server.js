var WebpackDevServer = require('webpack-dev-server')

var compiler = require('./compiler')
var devConfig = require('./devConfig')

var server = new WebpackDevServer(compiler, devConfig)

module.exports = server