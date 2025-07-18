const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:6565',
      changeOrigin: true,
    })
  );

  app.use(
    '/ws',
    createProxyMiddleware({
      target: 'http://localhost:6565',
      changeOrigin: true,
      ws: true, // Enable WebSocket proxying
    })
  );
};
