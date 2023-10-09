var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

// Routes
const agreements = require("./routes/agreement");
const submissions = require("./routes/submission");
const balances = require("./routes/balance");
const admin = require("./routes/admin");
const account = require("./routes/account");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Config CORS
// Set in .env file
const whiteList = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Routing
app.use("/agreements", agreements);
app.use("/submissions", submissions);
app.use("/balances", balances);
app.use("/admin", admin);
app.use("/account", account);

module.exports = app;
