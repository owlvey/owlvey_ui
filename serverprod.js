const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname + "/build"));

var PORT = 3070;
app.listen(PORT, err => {
  if (err) console.log(`=> OMG!!! 🙀 ${err}`);
  console.log(`=> 🔥  Webpack dev server is running on port ${PORT}`);
});
