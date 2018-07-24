const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  mode: 'development',
  watch: true,
  devtool: 'source-map',
};
