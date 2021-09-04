const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ['react-hot-loader/patch', path.resolve(__dirname, './src/index.tsx')],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Contexts': path.resolve(__dirname, 'src/contexts/'),
      '@App': path.resolve(__dirname, 'src/'),
    },
    extensions: ['*', '.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
};
