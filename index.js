const http = require('http');

function handle(_request, response) {
  const name = process.env.NAME;
  const age = process.env.AGE;
  response.write(`Hello, I'm ${name}. I'm ${age}`);
  response.end();
}

const server = http.createServer(handle);

server.listen(8000)