const express = require('express');/*
const nunjucks = require('nunjucks');*/

const server = express();

server.get('/', function(req, res) {
    return res.send("Hello World! testando servidor!");
});

server.listen(5000, function() {
   return console.log("Servidor Rodando!")
});