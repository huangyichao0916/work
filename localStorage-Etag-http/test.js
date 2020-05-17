const chokidar = require('chokidar');

let watcher = chokidar.watch('./users.json');
let version = 1;

watcher.on('change',() => {
    version++;
    console.log('改变了',version);
})