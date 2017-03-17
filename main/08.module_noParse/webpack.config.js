var path = require('path')
var DashboardPlugin = require('webpack-dashboard/plugin')

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
    publicPath: 'http://localhost:8080/assets/07/'
  },

  module: {
    // Ignored files should not have calls to import, require, define or any other importing mechanism.
    // This can boost build performance when ignoring large libraries.
    noParse: /noParseFile/,
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
  },

  plugins: [
    new DashboardPlugin()
  ]
}