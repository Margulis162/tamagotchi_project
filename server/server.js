// var
const http = require('http');
const fs = require('fs');

// f(x)
// flow
const server = http.createServer((req, res) => {
    console.log("request made");

    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // send html
    fs.readFile('../index.html', (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end(); 
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log("now listening for reqs ")
})