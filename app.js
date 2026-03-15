require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
// init middwares
app.use(morgan("dev"));
app.use(helmet());
// init middware
// init db
require("./dbs/init.mongodb");
//init routers
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "welcome to my api",
  });
});
//handling errors
module.exports = app;
