'use strict';
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type' : 'text/html'});
  res.end('hi')  
})
.listen(3000, () => console.log('server running on port 3000'));