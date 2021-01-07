const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    open: true
  },
  plugins: [new HtmlWebpackPlugin({ publicUrl: '/public', template: 'public/index.html' })],
})
