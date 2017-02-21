const path = require('path')
const webpack = require('webpack')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/main.js'),
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
