const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App');

const app = express();

// 정적 파일 제공
app.use(express.static('public'));

app.get('/', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server Side Rendering</title>
    </head>
    <body>
      <div id="app">${appHtml}</div>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});