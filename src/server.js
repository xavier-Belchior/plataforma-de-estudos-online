
//Server
const express = require ('express')
const server = express()

const {
pageLangin,
pageStudy,
pageGiveClasses,
saveClasses  
} = require('./pages')


// Configurando o nunjucks(temple enginear)
const nunjucks= require('nunjucks')
 nunjucks.configure('src/views',{
    express:server,
    noCache:true,
 })

 //Inicio e configuração do servidor
 server
 //Receber os dados do req.body
 .use(express.urlencoded({ extended: true }))
// Aqui ela pega a minha pasta "Public" para poder vincular com meu html/configurar arquivos estaticos(css,scripts,img)
.use(express.static("public"))

// Rotas da aplicação
.get("/", pageLangin)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)


// start do server
.listen(5500)




