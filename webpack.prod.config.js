const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const getDateBuild = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
  ];
  const padZero = nro => `${nro < 10 ? "0" : ""}${nro}`;
  const currentDate = new Date();
  return `Build ${currentDate.getDate()}-${
    months[currentDate.getMonth()]
  }-${currentDate.getFullYear()} ${padZero(currentDate.getHours())}.${padZero(
    currentDate.getMinutes()
  )}.${padZero(currentDate.getSeconds())}`;
};

const config = {
  mode: "production",
  context: `${__dirname}/src`,
  entry: [path.join(__dirname, "src", "index.js")],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  resolve: {
    modules: ["node_modules", path.join(__dirname, "src")]
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
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: "style-loader"
          },
          use: [
            { loader: "css-loader", options: { sourceMap: false } },
            { loader: "resolve-url-loader?keepQuery" },
            { loader: "svg-fill-loader/encodeSharp" },
            { loader: "sass-loader", options: { sourceMap: false } }
          ]
        })
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new ExtractTextPlugin({ filename: "styles.[name].css" }),
    new webpack.DefinePlugin({
      "process.env.API_URL": `"https://tqtkw327jf.execute-api.us-east-2.amazonaws.com/api"`,
      "process.env.IS_PROD": `true`,
      "process.env.buildNumber": `"${getDateBuild()}"`
    })
  ]
};

module.exports = config;
