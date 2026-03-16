require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
// init middwares
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// init middware
// init db
require("./dbs/init.mongodb");
//init routers
app.use("", require("./routers"));
//handling errors
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: error,
    code: statusCode,
    message: error.message || "Internal Server Error",
  });
});
module.exports = app;
