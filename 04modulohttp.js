const {createServer} = require('http');

let server = createServer((requeste, response) => {
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write(`
        <h1>Hello World</h1>
        <p>Primeira página com Node.js, ROMERO È PAULERAA/p>
    `);
    response.end();

});

server.listen(8000);

console.log("ouvindo a porta 8000");