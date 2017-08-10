const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res)=>{
    //do stuff
    // res.end('<h1>Hey</h1>');
    console.log(req.url);
    let urlPath = 'index.html';
    if(req.url != '/'){
        urlPath = req.url.slice(1);
    }
    // fs.readFile('blah.html',(err, buffer)=>{
        fs.readFile(urlPath, (err,buffer)=>{
            if (err){
                res.end();
                return;
            }
        res.end(buffer.toString());
    });
});
server.listen(8887);
    console.log("here I AM...");

// go to terminal and run nc local 8888 then run node index.js and the goto chrome and run localhost:8888