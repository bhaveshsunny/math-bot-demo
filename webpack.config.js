var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
    publicPath: path.resolve(__dirname, './public'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"), // Enable HMR
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader', 'eslint-loader']
    }
  ],
    rules:[
      {
        test: /\.jsx?$/,
        exclude:/node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        },

      },
       {
         test: /\.css$/,
         use: ExtractTextPlugin.extract({
           fallback: "style-loader",
           use: "css-loader"
         })
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }
    ]
  },
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/'
  }
};
