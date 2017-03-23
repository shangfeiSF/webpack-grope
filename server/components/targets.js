var options = require('./options')
var dirSpec = require('../constants/dirSpec')

var targetDirs = dirSpec.mainSubDirNames
if (options.index) {
  targetDirs = dirSpec.mainSubDirNames.filter(function (dir) {
    var index = dir.split('\.').shift()
    return options.index.indexOf(index) > -1
  })
}

module.exports = targetDirs