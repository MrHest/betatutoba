const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html'
    })
  ]
};



// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const path = require('path');
 
// module.exports = {
//   entry: {
//     app: path.resolve(__dirname, 'src/scripts/index.js'),
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader',
//           },
//           {
//             loader: 'css-loader',
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: path.resolve(__dirname, 'src/templates/index.html'),
//     }),
//     new CopyWebpackPlugin({
//       patterns: [
//         {
//           from: path.resolve(__dirname, 'src/public/'),
//           to: path.resolve(__dirname, 'dist/'),
//         },
//       ],
//     }),
//   ],
// };