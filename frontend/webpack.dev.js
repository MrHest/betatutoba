const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 6900,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:9000',
        changeOrigin: true,
      },
    ],
    open: true,
  },
  devtool: 'inline-source-map',
});
