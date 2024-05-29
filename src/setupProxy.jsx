// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/zara-proxy', // זהו הנתיב באתר המקור שברצונך לגשת אליו
//     createProxyMiddleware({
//       target: 'https://www.zara.com', // כתובת האתר היעד
//       changeOrigin: true, // חשוב לשנות את ה-origin כדי לעקוף את CORS
//       pathRewrite: { '^/zara-proxy': '' }, // אין צורך לשנות את הנתיב בבקשה המקורית
//       onProxyRes: function(proxyRes, req, res) {
//          proxyRes.headers['Access-Control-Allow-Origin'] = '*'; // שובר את ה-CORS על ידי הוספת כותרת לתשובה
//       }
//     })
//   );
// };
