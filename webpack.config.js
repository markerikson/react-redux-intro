/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
    resolve : {
        extensions : [".js", ".jsx"]
    },
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules|examples/,
      loader: "babel-loader",
      query: {
        plugins: [
          [
            "react-transform", {
              transforms: [{
                transform: "react-transform-hmr",
                imports: ["react"],
                locals: ["module"]
              }, {
                transform: "react-transform-catch-errors",
                imports: ["react", "redbox-react"]
              }]
            }
          ]
        ]
      },
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "raw-loader"],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: [path.join(__dirname, "assets"), path.join(__dirname, "presentation")]
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
      include: [path.join(__dirname, "assets"), path.join(__dirname, "presentation")]
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: [path.join(__dirname, "assets"), path.join(__dirname, "presentation")]
    },
        { test: /\.svg$/, loader: 'url?limit=8192&mimetype=image/svg+xml&name=[name].[ext]' },
        { test: /\.woff$/, loader: 'url?limit=8192&mimetype=application/font-woff&name=[name].[ext]' },
        { test: /\.woff2$/, loader: 'url?limit=8192&mimetype=application/font-woff2&name=[name].[ext]' },
        { test: /\.[ot]tf$/, loader: 'url?limit=8192&mimetype=application/octet-stream&name=[name].[ext]' },
        { test: /\.eot$/, loader: 'url?limit=8192&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' }
    ]
  }
};
