/* eslint no-console: "off" */
require("dotenv").config();
require("colors");

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/assets", express.static("src/assets"));

const webpack = require("webpack");
const webpackConfig = require("./webpack.dev.config");
const compiler = webpack(webpackConfig);
app.use(
  require("connect-history-api-fallback")({
    verbose: false,
  }),
);
app.use(
  require("webpack-dev-middleware")(compiler, {
    hot: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false,
      children: false,
    },
  }),
);
app.use(require("webpack-hot-middleware")(compiler));

const API_URL = process.env.API_URL;
if (API_URL.startsWith("http://localhost")) {
  // Set up mongoose connection
  const mongoose = require("mongoose");
  const databaseName = "owlvey_db";
  const stringConnection = `mongodb://localhost:27017/${databaseName}`;
  mongoose.connect(stringConnection, { useNewUrlParser: true }, error => {
    if (error) console.log("Error connection mongoDB".red, error);
    else console.log("=====> Connection to MONGO DB is ready <=====".green);
  });
  //mongoose.Promise = global.Promise;
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  const sessionRouter = require("./server-api/routes/session.route");
  const userRouter = require("./server-api/routes/user.route");
  const customerRouter = require("./server-api/routes/customer.route");
  const productRouter = require("./server-api/routes/product.route");
  const versionRouter = require("./server-api/routes/version.route");
  const featureRouter = require("./server-api/routes/feature.route");
  const scenarioRouter = require("./server-api/routes/scenario.route");
  const stepRouter = require("./server-api/routes/step.route");
  const caseRouter = require("./server-api/routes/case.route");
  app.use("/api", sessionRouter);
  app.use("/api/users", userRouter);
  app.use("/api/customers", customerRouter);
  app.use("/api/products", productRouter);
  app.use("/api/versions", versionRouter);
  app.use("/api/features", featureRouter);
  app.use("/api/scenarios", scenarioRouter);
  app.use("/api/steps", stepRouter);
  app.use("/api/cases", caseRouter);
}

var PORT = process.env.PORT_NUMBER;
app.listen(PORT, err => {
  if (err) console.log(`=> Run Forrest, RUN!!! 🙀 ${err}`.red);
  console.log(
    `=====> 🔥  Webpack dev server is running on port ${PORT} <=====`.green,
  );
});
