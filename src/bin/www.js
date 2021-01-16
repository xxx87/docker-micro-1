const app = require("../app");
const appConfig = require("../config").appConfig;
const log = require("../logging");

const port = appConfig.port;
const server = require("http").createServer(app);

server.listen(port, () => {
  log.info(`Server is running on port ${port}`);
});

process.on("SIGINT", function () {
  process.exit();
});
process.on("exit", function () {
  console.log("Exiting application ...");
});
