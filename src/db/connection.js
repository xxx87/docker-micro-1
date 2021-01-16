let mongoose = require("mongoose");

const dbConfig = require("../config").dbConfig;
const log = require("../logging");
const Admins = require("./models/Admin");

// create mongo connection
const createDbConnection = () => {
  return mongoose.connect(dbConfig.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// get mongo connection object
const getDbConnection = () => {
  return mongoose.connection;
};

const onSuccess = () => {
  log.info("Successfully connected to database!!!: " + dbConfig.mongoUrl);
  // Admins.create(
  //   {
  //     username: "test",
  //     email: "test@test.com",
  //     firstName: "firstName",
  //     lastName: "lastName",
  //     password: "123456",
  //     isAdmin: true,
  //   },
  //   function (err, user) {
  //     if (err) console.error(err);
  //     console.log("Done!!! ", user);
  //   }
  // );
};

const onError = (error) => {
  log.error("Failed to connect to database.");
  log.error(error);
};

module.exports = {
  createDbConnection,
  getDbConnection,
  onError,
  onSuccess,
};
