module.exports =
  files:
    javascripts:
      joinTo: 'dist.js'
  plugins:
    babel:
      presets: ['es2015', 'stage-0', 'react'],
      plugins: ['transform-runtime', 'transform-decorators-legacy']
