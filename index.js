const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";
const fs = require("fs");

const server = http.createServer((req, res)=>{
if(req.url === "/"){
    
}

// res.end("welcome to the server");
});

server.listen(port, ()=>{
console.log(`server is running`);
});