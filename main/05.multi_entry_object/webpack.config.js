var path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    vendor: './vendor.js',
    entry: './entry.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build')
  },

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