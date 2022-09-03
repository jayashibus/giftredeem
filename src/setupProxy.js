const { createProxyMiddleware } = require("http-proxy-middleware");
const PORT = process.env.SERVER_PORT || 8080;

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: `http://localhost:${PORT}`,
      changeOrigin: true,
    })
  );
};
