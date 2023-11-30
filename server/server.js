// var
const http = require('http');

// f(x)
// flow
const server = http.createServer((req, res) => {
    console.log("request made");
});

server.listen(3000, 'localhost', () => {
    console.log("now listening for reqs ")
})