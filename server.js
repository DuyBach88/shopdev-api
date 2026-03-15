const app = require("./app");
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// process.on("SIGINT", () => {
//   server.close(() => {
//     console.log("server closed");
//   });
// });
