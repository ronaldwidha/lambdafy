//var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js',
  target: 'node',
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\/json$/, loaders: ['json'] }
    ]
  },
  //externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: 'dist',
    filename: 'index.js'
  }
};