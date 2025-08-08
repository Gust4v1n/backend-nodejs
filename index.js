const FuncaoZika = require('./soma.js')
const startServer = require('./server.js')

console.log("Rodandooooooooooooooooooo");
console.log(FuncaoZika(1,2));
startServer();
setTimeout(()=>{
    console.log("delay de 1 segundos");
        setTimeout(()=>{
            console.log("delay de 2 segundos");
        },2000);
},1000);

