// importando o express
const express = require("express");
const app = express();

//informando que será utilizado o ejs para criar o front
app.set('view engine','ejs');

//caminhos 
app.get("/",(req, res) => {res.render("index");});

//iniciando a aplicação na porta 8080
app.listen(8080,() => {console.log("Rodando...");});