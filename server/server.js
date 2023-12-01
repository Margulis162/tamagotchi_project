// var
const http = require('http');
const fs = require('fs');

// f(x)
// flow
const server = http.createServer((req, res) => {
    console.log("request made");

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('hello');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log("now listening for reqs ")
})