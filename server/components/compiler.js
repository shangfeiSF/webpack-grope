var os = require('os')
var path = require('path')

var webpack = require('webpack')
var Dashboard = require('webpack-dashboard')
var DashboardPlugin = require('webpack-dashboard/plugin')

var options = require('./options')
var dirSpec = require('../constants/dirSpec')

var webpackConfigFile = 'webpack.config.js'
var webpackConfigPath = path.join(dirSpec.mainDirPath, dirSpec.mainSubDirNames[0], webpackConfigFile)

var targetDir = dirSpec.mainSubDirNames.filter(function (dir) {
  return options.index == dir.split('\.').shift()
})
if (targetDir.length) {
  webpackConfigPath = path.join(dirSpec.mainDirPath, targetDir[0], webpackConfigFile)
}

var webpackConfig = require(webpackConfigPath)

webpackConfig.output.path = path.join(dirSpec.buildDirPath, dirSpec.mainSubDirNames[0])
if (targetDir.length) {
  webpackConfig.output.path = path.join(dirSpec.buildDirPath, targetDir[0])
} else {
  webpackConfig.entry = path.join(dirSpec.mainDirPath, dirSpec.mainSubDirNames[0], webpackConfig.entry)
}

var platform = os.platform()
if (platform === 'linux' || platform === 'darwin') {
  if (webpackConfig.plugins) {
    webpackConfig.plugins.push(new DashboardPlugin(new Dashboard().setData))
  } else {
    webpackConfig.plugins = [new DashboardPlugin(new Dashboard().setData)]
  }
}

var compiler = webpack(webpackConfig)

module.exports = compiler