var path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    vendor: './vendor.js',
    entry: './entry.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build'),
    hashFunction: 'sha256',
    hashDigest: 'base64',
    hashDigestLength: 15,
    chunkFilename: '[name].[id].[chunkhash].js',
    publicPath: 'http://localhost:8080/07/assets/'
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
        ]
      }
    ]
  }
}