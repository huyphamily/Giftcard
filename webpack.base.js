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
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};