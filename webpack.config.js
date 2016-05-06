var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  resolve: {
    root: [ path.resolve('./src') ]
  }
};
