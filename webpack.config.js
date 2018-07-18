const path = require('path');

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  mode: 'development',
  watch: true
};
