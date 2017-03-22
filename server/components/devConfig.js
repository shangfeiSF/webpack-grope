var fs = require('fs')
var os = require('os')
var path = require('path')

var options = require('./options')
var dirSpec = require('../constants/dirSpec')

var platform = os.platform()
var index = options.index || '01'
var dir = dirSpec.mainSubDirNames[+index - 1]
var html = fs.readFileSync(path.join(dirSpec.mainDirPath, dir, 'index.html'), {encoding: 'utf-8'})

var devConfig = {
  quiet: !!options.quiet,

  publicPath: '/' + index + '/assets/',

  headers: {
    "X-Custom-Header": "yes"
  },

  inline: true,

  noInfo: (platform === 'linux' || platform === 'darwin') ? true : false,

  stats: {
    colors: true
  },

  setup: function (app) {
    app.use('/' + index + '/index.html', function (req, res) {
      res.writeHead(200)
      res.end(html)
    })
  }
}

module.exports = devConfig