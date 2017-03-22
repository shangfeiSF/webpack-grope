var colors = require('colors')

var servers = require('./components/servers')

module.exports.urls = function () {
  return servers.map(function (server) {
    return 'http://localhost:' + server.port + '/' + server.index + '/index.html'
  })
}

module.exports.start = function () {
  servers.forEach(function (server) {
    server.main.listen(server.port, function () {
      console.log(('Dev-Server is listening on `http://localhost:' + server.port + '/' + server.index + '/index.html`').green)
    })
  })
}