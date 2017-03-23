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
    chunkFilename: '[name].[id].[chunkhash].js',
    publicPath: 'http://localhost:8080/09/assets/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      // Rule.loader is a shortcut to Rule.use: [ { loader } ]
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1', 'stage-2', 'stage-3']
        }
      },
      // use loaders by chain
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}