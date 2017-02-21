const path = require('path')
const webpack = require('webpack')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    content_script: path.join(__dirname, 'src/content_script.js'),
    popup: path.join(__dirname, 'src/popup.js'),
  },
  output: {
    path: path.join(__dirname, 'extension'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: production,
      debug: false,
    }),
    ...(production ? [new webpack.optimize.UglifyJsPlugin()] : []),
  ],
}
