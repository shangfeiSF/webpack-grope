var fs = require('fs')
var path = require('path')

var express = require('express')

var options = require('./options')
var dirSpec = require('../constants/dirSpec')

var devConfig = {
  quiet: !!options.quiet,

  publicPath: '/__build__/',

  headers: {
    "X-Custom-Header": "yes"
  },

  inline: true,

  noInfo: true,

  stats: {
    colors: true
  },

  setup: function (app) {
    dirSpec.mainSubDirNames.forEach(function (dir) {
      var index = dir.split('\.')[0]

      var assetsDirName = 'assets'
      var indexHtml = 'index.html'

      var assetsPath = '/' + index + '/' + assetsDirName + '/'
      var assetsDir = path.join(dirSpec.buildDirPath, dir, assetsDirName)

      app.use(assetsPath, express.static(assetsDir))

      var indexPath = '/' + index + '/' + indexHtml
      var indexDir = path.join(dirSpec.buildDirPath, dir, indexHtml)

      app.use(indexPath, express.static(indexDir))
    })
  }
}

module.exports = devConfig