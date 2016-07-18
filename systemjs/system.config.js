System.config({
  transpiler: 'plugin-babel',
  meta: {
    '*.js': {
      babelOptions: {
      }
    }
  },
  map: {
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-node.js',
  }
});
