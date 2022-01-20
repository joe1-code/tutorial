const http = require('http');
const server = http.createServer((req, res) => {
 if (req.url === '/') {
  res.end('Welcome at my home page')
 }
 if (req.url === '/about') {
  res.end('This my about page')
 }
 res.end(
  `<h1>Oops!</h1>
   <p>We can't access a resource you requested</p>
   <a href="/"> back home </a>
   `
 )

});



server.listen(1000)

