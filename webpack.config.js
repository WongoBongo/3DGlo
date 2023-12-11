const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/main.js',
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true,
    }
  },
  mode: 'development', // или 'production'
};
