const http = require('http');
const fs = require('fs');
const users = require('./users.json');
const chokidar = require('chokidar');


let watcher = chokidar.watch('./users.json');
let version = 3;

watcher.on('change',(event,path) => {
    version++;
    console.log('改变了',version);
})

http.createServer((req,res) => {
    if (req.url === '/') {
        fs.createReadStream('index.html').pipe(res);
    }else if(req.url === '/users'){
        if (req.headers['if-none-match']) {
            if (Number(req.headers['if-none-match']) == version) {
                res.setHeader('Etag',version);
                res.statusCode = 304;
                res.end();
                return;
            }else{
                res.setHeader('Etag',version);
                res.end(JSON.stringify(users));
                return;
            }
        }
        res.setHeader('Etag',version);
        res.end(JSON.stringify(users));
    }
}).listen(3000);