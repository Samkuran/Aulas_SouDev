const http = require ("http");
const host = "localhost";
const port = "8000";

const userController = require ("./users");

const server = http.createServer((req, res) => {
    if (res.url == "/users") {
        res.end(userController.listUser())
    } else {
        res.end("Hello world");
    }
})

server.listen(port, host, () => {
    console.log(`Servidor de pé no link: http://${host}:${port}`)
})

// console.log("Hello world");

// function somar (num1, num2){
//     return console.log(num1 + num2);
// }

// somar (3,5)



// console.log (userController.createUser ());
