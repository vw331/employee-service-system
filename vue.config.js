const path = require('path')
const webpack = require('webpack')

module.exports = {
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  publicPath: process.env.VUE_APP_PUBLICPATH,
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
        "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
      }
    }
  },
  chainWebpack: config =>{

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])

    config.plugin('html')
      .tap(args => {
        args[0].title = process.env.VUE_APP_TITLE;
        return args;
      })

 
  },
} 