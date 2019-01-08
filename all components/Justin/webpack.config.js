var path = require('path');
var dir_in = path.join(__dirname, '/client');
var dir_out = path.join(__dirname, '/client/dist');


// fix webpacl config in morning

module.exports = {
  entry: `${dir_in}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: dir_out
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: dir_in,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};