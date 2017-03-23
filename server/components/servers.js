var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var compilers = require('./compilers')
var devConfigs = require('./devConfigs')
var targetDirs = require('./targets')

var servers = targetDirs.map(function (dir) {
  var index = dir.split('\.').shift()

  var port = devConfigs[index]._port_
  delete  devConfigs[index]._port_

  if (compilers[index].output.publicPath) {
    compilers[index].output.publicPath = compilers[index].output.publicPath.replace(/http\:\/\/localhost\:8080/g, 'http://localhost:' + port)
  }

  return {
    index: index,
    port: port,
    main: new WebpackDevServer(webpack(compilers[index]), devConfigs[index])
  }
})

module.exports = servers