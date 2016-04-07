var path = require('path')

module.exports = {
  entry: './client/main.jsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
// I like to use path.join, but path.resolve would be a good alternative.
// path.resolve is equivalent to navigating the file system through
// cd. path.join gives you just that, a join. See Node.js path API
// for the exact details.
