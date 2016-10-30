var path = require('path');
var webpackConfig = require('./webpack.config.js');

webpackConfig.entry = './test/index.js';
webpackConfig.module.devtool = 'source-map';
webpackConfig.output.path = '.webpack'
webpackConfig.output.filename = 'index.js';
webpackConfig.output.sourceMapFilename = "index.map";
module.exports = webpackConfig;