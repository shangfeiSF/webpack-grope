var colors = require('colors')

var server = require('./components/server')
var port = 8080

module.exports.start = function () {
  server.listen(port, function () {
    console.log(('Dev-Server is listening on http://localhost:' + port + '...').green)
  })
}