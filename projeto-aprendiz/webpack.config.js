const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/main.js",
  },
  output: {
    filename: "./dist/js/[name].js",
    chunkFilename: "./dist/js/[id].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        },
        test: /\.(woff2?|eot|ttf|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
    ],
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
        //   use: [{
        //       loader: 'style-loader', // inject CSS to page
        //   }, {
        //       loader: 'css-loader', // translates CSS into CommonJS modules
        //   }, {
        //       loader: 'postcss-loader', // Run post css actions
        //       options: {
        //           plugins: function () { // post css plugins, can be exported to postcss.config.js
        //               return [
        //                   require('precss'),
        //                   require('autoprefixer')
        //               ];
        //           }
        //       }
        //   }, {
        //       loader: 'sass-loader' // compiles SASS to CSS
        //   }]
      }
    ]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("./dist/css/[name].css")
    // new ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   Popper: ['popper.js', 'default']
    // })
  ]
};