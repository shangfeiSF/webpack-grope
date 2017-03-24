var path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    entry: './entry.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build')
  },

  // why setup node.Buffer to `false` when use 'css-loader' to bundle .css or .less
  // see issue: https://github.com/webpack-contrib/css-loader/issues/454
  node: {
    Buffer: false
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
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1', 'stage-2', 'stage-3']
        }
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.css'], // without .less

    modules: [path.resolve(__dirname, 'src', 'absolute_modules'), 'node_modules', 'extra_modules'],

    alias: {
      // imported by `resolve_normal.js`
      // imported by `resolve_filePath.js`
      comps_lib: path.resolve(__dirname, './src/comps/lib.js'),
      actions_lib: './actions/lib.js',
      routes_lib: 'routes/lib.js',
      // imported by `resolve_filePath$.js`
      comps_utils$: path.resolve(__dirname, './src/comps/utils.js'),
      actions_utils$: './actions/utils.js',
      routes_utils$: 'routes/utils.js',
      // imported by `resolve_dirPath.js`
      comps_base: path.resolve(__dirname, './src/comps'),
      actions_base: './actions',
      routes_base: 'routes',
      // imported by `resolve_dirPath$.js`
      comps_helpers$: path.resolve(__dirname, './src/comps'),
      actions_helpers$: './actions',
      routes_helpers$: 'routes'
    }
  }
}