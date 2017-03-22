var WebpackDevServer = require('webpack-dev-server')

var options = require('./options')
var compilers = require('./compilers')
var devConfigs = require('./devConfigs')
var dirSpec = require('../constants/dirSpec')

var targetDirs = dirSpec.mainSubDirNames
if (options.index) {
  targetDirs = dirSpec.mainSubDirNames.filter(function (dir) {
    var index = dir.split('\.').shift()
    return options.index.indexOf(index) > -1
  })
}

var servers = targetDirs.map(function (dir) {
  var index = dir.split('\.').shift()

  var port = devConfigs[index]._port_
  delete  devConfigs[index]._port_

  return {
    index: index,
    port: port,
    main: new WebpackDevServer(compilers[index], devConfigs[index])
  }
})

module.exports = servers