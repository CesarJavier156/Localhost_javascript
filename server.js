const http = require("http")
http.createServer((req,res)=>{
    res.write("Hola ")
    res.end()
}).listen(3000)
console.log("Host encendido")