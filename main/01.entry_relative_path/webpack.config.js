module.exports = {
  // use relative path to config `enrty` and `output.path`
  // thus you should only use `webpack` in the directory where webpack.config.js is to bundle
  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: './build'
  },
}