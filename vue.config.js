const path = require('path')
const htmlWepackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  transpileDependencies: ['ant-design-vue'],
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        lessOptions: {
          modifyVars: {
          },
          include: [path.join(__dirname, '../node_modules/')],
          postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')]
          }
        },
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js", 
      }
    }
  },
} 