//importar dependencia
const express = require('express');
const pages = require('./pages.js');
//path trata as barras dos caminhos e etc...
const path = require('path');

//iniciar o express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({ extended: true }))

    //utilizando os arquivos estáticos
    .use(express.static('public'))

    //configurar template engine - npm install hbs
    .set('views',path.join(__dirname,"views"))
    .set('view engine', 'hbs')

    //cria  rotas
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//liga o server
server.listen(5500)
