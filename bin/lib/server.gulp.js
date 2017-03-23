var fs = require('fs')
var os = require('os')
var path = require('path')

var gulp = require('gulp')
var open = require('gulp-open')
var minimist = require('minimist')

var options = minimist(process.argv.slice(2), {
  string: 'urls',
  default: {urls: ''}
})

var browser = os.platform() === 'linux' ?
  'google-chrome' :
  (os.platform() === 'darwin' ? 'google chrome' : (os.platform() === 'win32' ? 'chrome' : 'firefox'))

gulp.task('open', function () {
  var begin = gulp.src(__filename)
  var urls = [].concat(options.urls)

  urls.forEach(function (url) {
    begin.pipe(open({
      uri: url,
      app: browser
    }))
  })
})