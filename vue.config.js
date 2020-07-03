
const { resolve, join } = require('path')

module.exports = {
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 8000,
    open: true
  },
  // 配置webpack
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        src: join(__dirname, 'src'),
        components: join(__dirname, 'src/components'),
        public: join(__dirname, 'public')
      }
    }
  }
}
