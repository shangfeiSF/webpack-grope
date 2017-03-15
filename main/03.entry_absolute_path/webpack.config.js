var path = require('path')

module.exports = {
  // use absolute path to config `enrty` and `output.path`
  // thus you can use `webpack --config path/to/webpack.config.js` anywhere
  entry: path.join(__dirname, 'src', 'entry.js'),

  output: {
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