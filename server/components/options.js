var nopt = require('nopt')
var lodash = require('lodash')

var dirSpec = require('../constants/dirSpec')

var knowns = {
  'index': String,
  'quiet': Boolean
}

var baseShorts = {
  'i': ['--index'],
  'q': ['--quiet']
}

var extraShorts = {}
dirSpec.mainSubDirNames.forEach(function (dir) {
  var index = dir.split('\.').shift()
  var cmd = 'i' + index

  extraShorts[cmd] = ['--index']
  extraShorts[cmd].push(index)
})

var options = nopt(knowns, lodash.merge({}, baseShorts, extraShorts), process.argv, 2)

module.exports = options