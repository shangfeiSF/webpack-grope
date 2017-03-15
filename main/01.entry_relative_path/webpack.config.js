module.exports = {
  // use relative path to config `enrty` and `output.path`
  // thus you should only use `webpack` in the directory where webpack.config.js is to bundle
  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: './build'
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