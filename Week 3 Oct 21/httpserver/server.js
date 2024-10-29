const http = require('http');

const server = http.createServer();

const PORT = 3000;
server.listen(PORT);

server.on('connection', (socket)=>{
    console.log('New Connection...');
});

console.log(`Listening to port ${PORT}`);