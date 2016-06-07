var path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, "public/js/app.js")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "public/js")
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["react"]
        }
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, "public/js"),
    extensions: ["", ".js"],
    moduleDirectories: ["node_modules"]
  },
  debug: true,
  devtool: 'eval-cheap-module-source-map'
};
