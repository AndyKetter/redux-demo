var path = require('path')
var webpack = require('webpack')
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    mangle: {
        except: ['$super', '$', 'exports', 'require']
    }
})
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors','common.js')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'vendors':['react','react-dom','react-router','react-redux','redux','react-router-redux'],
    'app':'./app'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),UglifyJsPlugin,commonsPlugin
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    // contentBase:'/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
    },
    { test: /\.scss$/,loaders: ['style', 'css', 'sass'] }

    ]
  }
}
