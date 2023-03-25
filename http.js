const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to my homepage');
    }
    else if (req.url === '/about') {
        res.end('Here is a summary');
    } else {
        res.end(`<h1>OOPS!</h1>
        <p>something went wrong</p>
        <a href='/'> back home</a>`
        )
    }

})

server.listen(5000);