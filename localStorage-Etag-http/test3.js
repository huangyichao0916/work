const http = require('http');
const fs = require('fs');
let version = 5;
http.createServer((req,res) => {
    if (req.url === '/') {
        // fs.createReadStream('index.html').pipe(res);
        // res.setHeader('Etag','123hyc');
        res.end('hyc');
    }
}).listen(3001);