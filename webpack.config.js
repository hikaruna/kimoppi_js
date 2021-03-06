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
    root: [
      path.resolve('./src'),
      path.resolve('./bower_components'),
    ],
    alias: {
      "enchant.js": 'enchant.js-builds/build/enchant.js'
    }
  },
  module: {
    loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }
    ]
  }
};
