const express = require("express");
const app = express();

//Definindo que vou utilizar o ejs para fazer o html
app.set('view engine','ejs');
//Definindo que minha aplicação vai usar arquivos estaticos (CSS, imagens...)
app.use(express.static('public'));

app.get ("/",(req,res) => {
    res.render("index");
});

app.get ("/CadEmpresa",(req,res) => {
    res.render("CadEmpresa");
});

app.get ("/CadEquipamento",(req,res) => {
    res.render("CadEquipamento");
});

app.get ("/CadPartEmpresa",(req,res) => {
    res.render("CadPartEmpresa");
});

app.get ("/CadPartEquipamento",(req,res) => {
    res.render("CadPartEquipamento");
});

app.post ("/salvarpergunta",(res,req) => {
    res.send("Pergunta recebida");
});

app.listen(443,()=>{ console.log("Show");}); 

