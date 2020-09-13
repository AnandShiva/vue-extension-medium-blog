const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ExtensionReloader  = require('webpack-extension-reloader');



module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'newTab': './newTab.js',
    'background': './background.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ExtensionReloader({
      manifest: path.resolve(__dirname,'src', "manifest.json"),
      entries: {
        background: 'background' // *REQUIRED
      }
    }),
    new CopyPlugin({
      patterns: [
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'newTab.html', to: 'newTab.html' }
      ],
    }),
  ],
};