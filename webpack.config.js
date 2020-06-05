const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    // adds script to the <head></head> tag
    aframe_head: './src/aframe.js',
    // adds script to the end of <body></body> tag
    app: './src/index.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['aframe_head', 'app'],
    }),
    new HtmlWebpackInjector(),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
  },
};
