const http = require('http');
const { differenceInSeconds } = require('date-fns');

let startedAt = new Date();

function handle(_request, response) {
  const duration = differenceInSeconds(new Date(), startedAt);


  if(duration < 10) {
    response.writeHead(500)
    response.write('Internal Server Error')
  } else {
    response.writeHead(200)
    response.write(`Duration In Seconds: ${duration}`)
  }

  response.end();
}

const server = http.createServer(handle);

server.listen(8000);