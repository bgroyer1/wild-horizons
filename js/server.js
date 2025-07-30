import http from 'node:http';
// specify the port 
const PORT = 5501

// create server
const server = http.createServer((request, response) => {
  response.end('Hello from the server! ');
});

server.listen(PORT , () => console.log(`server running on port: ${PORT}`))