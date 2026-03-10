const { defineConfig } = require('@vue/cli-service')
const { VuetifyPlugin } = require('webpack-plugin-vuetify')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new VuetifyPlugin({ autoImport: true }),
    ],
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        vm:     require.resolve('vm-browserify'),
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '',
      }
    }
  }
})