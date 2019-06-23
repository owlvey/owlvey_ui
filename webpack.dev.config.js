const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");
//const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const config = {
  mode: "development",
  context: `${__dirname}/src`,
  devtool: "#cheap-module-source-map",
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname, "src", "index")
  ],
  output: {
    filename: "[name].js",
    path: "/",
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules", path.resolve("./src")]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "resolve-url-loader?keepQuery" }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              camelCase: true,
              localIdentName: "[folder]__[local]--[hash:base64:5]",
              sourceMap: true
            }
          },
          { loader: "resolve-url-loader?keepQuery" },
          { loader: "svg-fill-loader/encodeSharp" },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.otf$/,
        loader: "url-loader?limit=10000&mimetype=font/opentype"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.eot(\?[\s\S]+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      },
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: ["file-loader"]
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
          },
          {
            loader: "svg-fill-loader?selector=svg"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    //new FaviconsWebpackPlugin("./assets/favicons/favicon-development.png"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new UnusedFilesWebpackPlugin({
      patterns: "**/*.js",
      globOptions: {
        ignore: ["node_modules/**/*", "**/*.test.js", "testUtils/**/*.js"]
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      "process.env.API_URL": `"${process.env.API_URL}"`,
      "process.env.IS_PROD": `false`
    })
  ]
};

module.exports = config;
