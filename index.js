const http = require('http');
const fs = require('fs/promises');

async function handle(_request, response) {
  try {
    const data = await fs.readFile('myfamily/family.txt')
    response.write(`My family: ${data.toString('utf-8')}`);
    response.end();
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
}

const server = http.createServer(handle);

server.listen(8000);