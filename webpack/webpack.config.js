module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }
      }
    ]
  }
};
