module.exports = (api) => {
  api.cache(true)

  console.log('babel is running')

  const presets = [
    [
      '@babel/preset-env',
      {
        debug: true,
        targets: {node: 'current'}
      },
    ],
    '@babel/preset-typescript'
  ]

  const plugins = []

  return {
    presets,
    plugins
  }
}
