const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    entry: './src/index.js',
    devtool: env === 'development' ? 'source-map' : 'none',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: require('html-webpack-template'),
        title: 'Spothire',
        appMountId: 'app',
      }),
    ],
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      ],
    },
  }
}
