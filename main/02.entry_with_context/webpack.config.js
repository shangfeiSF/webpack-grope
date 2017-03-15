var path = require('path')

module.exports = {
  // use relative path to config `enrty`, but use `context` to declare the directory for resolving entry points and loaders from configuration
  // use absolute path to config `output.path`
  // thus you can use `webpack --config path/to/webpack.config.js` anywhere
  context: path.join(__dirname, 'src'),

  entry: './entry.js',

  output: {
    pathinfo: true,
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },

  // use babel to compile the ES6 code
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-1', 'stage-2', 'stage-3']
            }
          }
        ],
      }
    ],
  },
}