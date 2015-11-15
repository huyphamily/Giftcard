var wpBase = require('./webpack.base.js');

wpBase.entry.unshift(
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
);

wpBase.devServer['hot'] = true;

module.exports = wpBase;