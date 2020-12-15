var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var srcPath = path.join(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/main.chunk.[chunkhash].js'
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};