const options = {
  entry: 'src/index.js',
  doc: {
    title: 'mz-web',
    themeConfig: { mode: 'light' },
    base: '/mz-web'
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ],
  // cssModules: true,
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
  esm: 'babel',
  cjs: 'babel',
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6']
  }
}

export default options
