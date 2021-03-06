const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './index.js',
  resolve: {
    alias: {'vue$': 'vue/dist/vue.esm.js'},
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
