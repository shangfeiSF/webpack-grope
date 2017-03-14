var path = require('path')

module.exports = {
  // use relative path to config `enrty`, but use `context` to declare the directory for resolving entry points and loaders from configuration
  // use absolute path to config `output.path`
  // thus you can use `webpack --config path/to/webpack.config.js` anywhere
  context: path.join(__dirname, 'src'),

  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
}