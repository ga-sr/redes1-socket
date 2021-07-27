const express = require('express'); //importação do express para a criação do servidor e rotas
const app = express(); // inicia a função do express
const http = require('http'); 
const server = http.createServer(app); // cria o server com os protocolos http
const io = require("socket.io")(server); //cria o socket com os parâmetros do server

app.get('/', (req, res) => { // definido para quando estiver na rota raiz
  res.sendFile(__dirname + '/index.html'); // chama a pagina index.html
});

io.on('connection', (socket) => { // escuta o evento de conexão para sockets de entrada
  console.log('um usuário se conectou'); // registra no console
  socket.on('chat message', (msg) => { // escuta o evento de conexão para uma mensagem
    console.log('mensagem: ' + msg);
  });
  socket.on('disconnect', () => { // escuta o evento de desconexão
    console.log('um usuário se desconectou');
  });
});

server.listen(3000, () => { // escuta a porta 3000
  console.log('escutando na porta 3000');
});
