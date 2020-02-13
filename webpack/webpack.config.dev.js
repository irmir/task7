const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const commonWebpack = require('./webpack.config.common');

module.exports = merge(commonWebpack, {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  devServer: {
    port: 9000,
    open: true,
    hot: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
});
