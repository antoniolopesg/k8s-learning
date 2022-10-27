const http = require('http');

async function handle(_request, response) {
  try {
    const user = process.env.USER;
    const password = process.env.PASSWORD;
    response.write(`User: ${user} Password: ${password}`);
    response.end();
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
}

const server = http.createServer(handle);

server.listen(8000);