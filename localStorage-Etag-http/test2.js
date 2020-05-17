const http = require('http');
const fs = require('fs');
let version = 5;
http.createServer((req,res) => {
    if (req.url === '/') {
        if (req.headers['if-none-match']) {
            if (Number(req.headers['if-none-match']) === version) {
                res.setHeader('Etag',version);
                res.statusCode = 304;
                res.end();
                return;
            }else{
                res.setHeader('Etag',version);
                res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
                res.end('改变了');
                return;
            }
        }
        res.setHeader('Etag',version);
        fs.createReadStream('index.html');
    }
}).listen(3000);