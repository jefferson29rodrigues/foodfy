const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const receitas = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
});

server.get('/', function(req, res) {
    return res.render("index");
});

server.get('/receitas', function(req, res) {
    return res.render('receitas', { items: receitas });
});

server.get('/sobre', function(req, res) {
    return res.render('sobre');
});

server.listen(5000, function() {
   return console.log("Servidor Rodando!")
});