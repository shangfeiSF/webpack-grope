var fs = require('fs')
var os = require('os')
var path = require('path')

var options = require('./options')
var targetDirs = require('./targets')
var dirSpec = require('../constants/dirSpec')

var BASEPORT = 8081
var PLATFORM = os.platform()

var devConfigs = {}
targetDirs.forEach(function (dir) {
  var _port_ = BASEPORT++
  var index = dir.split('\.').shift()
  var html = fs.readFileSync(path.join(dirSpec.mainDirPath, dir, 'index.html'), {
    encoding: 'utf-8'
  }).replace(/http\:\/\/localhost\:8080/g, 'http://localhost:' + _port_)

  var config = {
    quiet: !!options.quiet,

    publicPath: '/' + index + '/assets/',

    headers: {
      "X-Custom-Header": "yes"
    },

    inline: true,

    noInfo: ((PLATFORM === 'linux' || PLATFORM === 'darwin') && targetDirs.length == 1) ? true : false,

    stats: {
      colors: true
    },

    setup: function (app) {
      app.use('/' + index + '/index.html', function (req, res) {
        res.writeHead(200)
        res.end(html)
      })
    },

    _port_: _port_
  }

  devConfigs[index] = config
})

module.exports = devConfigs