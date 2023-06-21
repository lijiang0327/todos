const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader'],
        exclude: /node_module/
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    open: true,
    port: 8088
  }
};
