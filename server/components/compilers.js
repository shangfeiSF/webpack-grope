var os = require('os')
var path = require('path')

var Dashboard = require('webpack-dashboard')
var DashboardPlugin = require('webpack-dashboard/plugin')

var options = require('./options')
var dirSpec = require('../constants/dirSpec')

var PLATFORM = os.platform()
var WEBPACKCONFIGFILE = 'webpack.config.js'

var targetDirs = dirSpec.mainSubDirNames
if (options.index) {
  targetDirs = dirSpec.mainSubDirNames.filter(function (dir) {
    var index = dir.split('\.').shift()
    return options.index.indexOf(index) > -1
  })
}

var webpackConfigInfos = []
targetDirs.forEach(function (dir) {
  webpackConfigInfos.push({
    index: dir.split('\.').shift(),
    dir: dir,
    path: path.join(dirSpec.mainDirPath, dir, WEBPACKCONFIGFILE)
  })
})

var compilers = {}
webpackConfigInfos.forEach(function (info) {
  var webpackConfig = require(info.path)

  if (info.index == '01') {
    webpackConfig.entry = path.join(dirSpec.mainDirPath, info.dir, webpackConfig.entry)
  }
  webpackConfig.output.path = path.join(dirSpec.buildDirPath, info.dir)

  if (PLATFORM === 'linux' || PLATFORM === 'darwin') {
    if (webpackConfig.plugins) {
      webpackConfig.plugins.push(new DashboardPlugin(new Dashboard().setData))
    } else {
      webpackConfig.plugins = [new DashboardPlugin(new Dashboard().setData)]
    }
  }

  compilers[info.index] = webpackConfig
})

module.exports = compilers