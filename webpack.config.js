const webpack = require('webpack'); // check if es6 works here

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // hot reload URL
    'webpack/hot/only-dev-server',                     // reload only the dev server
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true // activate hot loading
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // hot loading plugin
  ]
};
