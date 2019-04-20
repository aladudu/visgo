
const proxy = require('http-proxy-middleware');
//
module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'https://cart.m.vsigo.cn',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }));
};  


 