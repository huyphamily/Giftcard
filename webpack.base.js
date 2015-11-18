var webpack = require('webpack');

module.exports = {
  entry: [
    './client/src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.scss$|\.css$/,
      loader: 'style!css!sass'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/app/assets/javascripts',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client',
    proxy: {
      '/api*': 'http://localhost:3000'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};