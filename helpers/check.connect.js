const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECOND = 5000;
//check connect
const checkConnect = () => {
  const numConnections = mongoose.connections.length;
  console.log(`Number of connections: ${numConnections}`);
};
//check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
    const maxConnections = numCore * 5;
    if (numConnections > maxConnections) {
      console.warn(
        `Warning: Number of connections (${numConnections}) exceeds the maximum allowed (${maxConnections}).`
      );
    }
  }, _SECOND);
};
module.exports = {
  checkConnect,
  checkOverLoad,
};
