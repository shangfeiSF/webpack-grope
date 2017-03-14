var path = require('path')

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'vendor.js'),
    path.join(__dirname, 'src', 'entry.js')
  ],

  output: {
    filename: 'bundle.js',
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