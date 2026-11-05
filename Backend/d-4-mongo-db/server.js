const { log } = require('console');
let http = require('http');

let server = http.createServer((req, res) =>{
  console.log("hello i am server")  
})