module.exports = {
  presets: [['@babel/stage-0', {
    decoratorsLegacy: true
  }]],
  plugins: [
    'istanbul',
    '@babel/transform-modules-commonjs'
  ]
}
