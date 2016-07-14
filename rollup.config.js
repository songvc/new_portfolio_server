import babel from 'rollup-plugin-babel';

export default {
  // tell rollup our main entry point
  entry: 'lib/index.js',
  dest: 'dist/rollup-bundle.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: 'es2015-rollup'
    })
  ]
}
