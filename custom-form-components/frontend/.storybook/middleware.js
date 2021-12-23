const proxy = require("http-proxy-middleware");

module.exports = function expressMiddleware(router) {
  router.get("/hello", (req, res) => {
    res.send("Hello World!");
    res.end();
  });
  router.use(
    "/flowable-engage",
    proxy({
      target: "http://localhost:9000",
      changeOrigin: true,
      logLevel: "debug"
    })
  );
};
