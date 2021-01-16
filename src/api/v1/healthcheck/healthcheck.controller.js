const healthcheck = (req, res) => {
  res.status(200).send("<h1>MicroService 1: API is up and running</h1>");
};

module.exports = {
  healthcheck,
};
