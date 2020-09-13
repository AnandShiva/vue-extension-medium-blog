const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src','newTab.js'),
  output: {
    filename: 'newTab.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'newTab.html', to: 'newTab.html' }
      ],
    }),
  ],
};