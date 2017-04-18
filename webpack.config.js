var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var plugins = [
  new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
  // new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
  // new UglifyJSPlugin(),
  new HtmlWebpackPlugin({template: 'src/200.html', filename: '200.html'})
];

const VENDOR_LIBS = [
  'nuka-carousel', 'google-map-react', 'react', 'react-dom', 'react-router', 'react-router-dom',
  'react-responsive', 'react-burger-menu'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        use: [{
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          {
              loader: 'image-webpack-loader',
              options: {}
          }
        ]
      }
    ],
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: { index: '200.html' },
    contentBase: 'dist/'
  }
};
