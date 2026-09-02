// Exercício 1: Criar um servidor HTTP simples que responda 'Olá, mundo!'.

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("Olá Mundo!");
});

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});