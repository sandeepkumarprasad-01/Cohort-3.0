const { log } = require("console")
let http = require("http")
console.log(http);
let server = http.createServer((req,res)=>{
    console.log("hello fron server");
    res.end("accepted your messga in port")
    
});

server.listen(3000,()=>{
    console.log('server is listening on port 3000');
    
});
