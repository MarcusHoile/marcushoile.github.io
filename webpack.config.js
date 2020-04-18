const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// only required to update the favicon html
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  mode: "production",
  watch: true,
  entry: ["./webpack/main.js"],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    filename: "js/[name]-bundle.js",
    path: path.resolve(__dirname, "assets/")
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "bower_components"),
        ],
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: "css-loader",
          },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: "postcss-loader"
          },
          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    // only needed when updating favicons
    // new HtmlWebpackPlugin(),
    // new FaviconsWebpackPlugin({
    //   logo: './webpack/favicon.png',
    //   outputPath: './images',
    //   prefix: 'images',
    //   inject: true,
    //   favicons: {
    //     appName: 'Marcus Hoile',
    //     appDescription: 'My portfolio and things',
    //     developerName: 'Me, of course',
    //   }

    // })
  ]
};
