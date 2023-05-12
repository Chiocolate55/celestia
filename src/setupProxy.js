const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use("/api",
    createProxyMiddleware("/api", {
      target: "http://94.131.119.239:26659",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};