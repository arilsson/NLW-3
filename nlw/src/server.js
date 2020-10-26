//importar dependencias

const express = require("express");
const path = require('path');
const pages = require('./pages.js')


//iniciando express
const server = express();
server

  .use(express.urlencoded({extended: true}))
  
  .use(express.static('public'))

  //configurar template engine
  .set('views' , path.join(__dirname, "views"))
  .set('view engine',  'hbs')

  //criar rotas
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

//ligar servidor - npm start (comando)
server.listen(5500)