const express = require('express');/*
const nunjucks = require('nunjucks');*/

const server = express();

server.get('/', function(req, res) {
    return res.send("Hello World!");
});

server.listen(5000, function() {
   return console.log("Servidor Rodando!")
});