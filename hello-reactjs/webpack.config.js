var webpack = require( 'webpack' );
var path = require( "path" );
var nodeExternals = require( 'webpack-node-externals' );

var config = {
  context: path.resolve( __dirname, "lib" ),
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/
      },
      {test: /\.json$/, loader: 'json'},
      {test: /\.png$/, loader: "file-loader?mimetype=image/png&name=images/[name].[ext]"},
      {test: /\.jpg$/, loader: "file-loader?mimetype=image/jpg&name=images/[name].[ext]"},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[md5:hash:10].[ext]"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file?name=fonts/[name].[md5:hash:10].[ext]"}
    ]
  }
};

module.exports = config;