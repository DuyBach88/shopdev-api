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
app.use('',require('./routers'))
//handling errors
module.exports = app;
