const http = require('http');

function handle(_request, response) {
  response.write('Hello World!!');
  response.end();
}

const server = http.createServer(handle);

server.listen(80)