/* 
  Add Plugins Here 
*/
var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// var PrerenderSpaPlugin = require('prerender-spa-plugin')
var PrerendererWebpackPlugin = require('prerenderer-webpack-plugin')

// Renders in your system browser by opening tabs, rendering your app, then closing tabs.
// See also: JSDOMRenderer, ChromeRenderer
var BrowserRenderer = PrerendererWebpackPlugin.BrowserRenderer

var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // chunksSortMode: 'dependency'
    }),

    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),

    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),

    // new PrerendererWebpackPlugin({
    //   // The path to the folder where index.html is.
    //   staticDir: path.join(__dirname, '../dist'),
    //   // List of routes to prerender.
    //   routes: [
    //     '/', 
    //     '/nearby/', 
    //     '/whats-good/', 
    //     '/cities/'
    //   ],    
    //   renderer: new BrowserRenderer({
    //     maxConcurrentRoutes: 1,
    //     renderAfterDocumentEvent: 'custom-post-render-event',
    //   })
    // })

    // new PrerenderSpaPlugin(
    //   // Absolute path to compiled SPA
    //   path.join(__dirname, '../dist'),
    //   // List of routes to prerender
    //   [ '/', '/nearby', '/whats-good', '/cities' ],
    //   {
    //     captureAfterTime: 4000,
    //     ignoreJSErrors: false,
    //     // captureAfterDocumentEvent: 'custom-post-render-event',
    //     navigationLocked: true,
    //     phantomPageViewportSize: {
    //       width: 1280,
    //       height: 800
    //     },
    //     // http://phantomjs.org/api/webpage/property/settings.html
    //     phantomPageSettings: {
    //       loadImages: true
    //     },
    //   }
    // )
  

  ] // End `plugins`
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
