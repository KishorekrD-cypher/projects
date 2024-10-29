const http = require('http');

const PORT = 3000;

const server = http.createServer(
    (req, res)=>{
        if(req.url == '/'){
            res.write("Hellow World!");
            res.end();
        }

        if(req.url == "/api/server1"){
            res.write(JSON.stringify([{id:1, username:'Kishore'},{id:2, username:'Kumar'}]));
            res.end();
        }
    }
);

server.listen(PORT);
console.log(`Listening to port ${PORT}`);