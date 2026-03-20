const http = require("http");
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/") {
    res.write("<h1>Seja bem vindo à minha página!</h1>");
  } else if (req.url === "/contato") {
    res.write("<h1>Esta é a página de contato!</h1>");
  } else if (req.url === "/sobre") {
    res.write("<h1>Esta é a página sobre mim!</h1>");
  }
  res.end();
});

servidor.listen(porta, host, () => {
  console.log("Servidor rodando.");
});
