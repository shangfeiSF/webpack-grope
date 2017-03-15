var fs = require('fs')
var path = require('path')
var express = require('express')

var server = express()

fs.readdirSync(path.join(__dirname, '../main')).forEach(function (dir) {
  var assets_path = '/assets/' + dir.split('\.')[0] + '/'
  var assets_dir = path.join(__dirname, '../main', dir, 'build')
  server.use(assets_path, express.static(assets_dir))

  var pages_path = '/pages/' + dir.split('\.')[0] + '/index.html'
  var pages_dir = path.join(__dirname, '../main', dir, 'index.html')
  server.use(pages_path, express.static(pages_dir))
})

server.listen(8080, function () {
  console.log('Server on http://localhost:' + 8080 + '...')
})