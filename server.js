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
    return res.render("index", { items: receitas });
});

server.get('/receitas', function(req, res) {
    return res.render('receitas', { items: receitas });
});

server.get('/description/:id', function(req, res) {
    const id = req.params.id;
    const idr = receitas[id].id;

    if (id == idr) {
        return res.render('description', { item: receitas[id] });
    } else {
        return res.send(`Você clicou no card com Id = ${id} idr = ${idr}! Você não chegou a página description...`);
    }

});

server.get('/sobre', function(req, res) {
    return res.render('sobre');
});

server.listen(5000, function() {
   return console.log("Servidor Rodando!")
});