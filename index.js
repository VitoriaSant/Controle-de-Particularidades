const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");



connection.authenticate()
    .then(() => {
        console.log(" certo");
    })
    .catch((msgErro) => {
        console.log (msgErro)
    })



//Definindo que vou utilizar o ejs para fazer o html
app.set('view engine','ejs');
//Definindo que minha aplicação vai usar arquivos estaticos (CSS, imagens...)
app.use(express.static('public'));
//Configuração do bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

app.post("/salvarEmpresa",(req,res) => {
    var cadRazaoSocial = req.body.cadRazaoSocial;
    var cadNomeFantacia = req.body.cadNomeFantacia;
    var cadcnpj = req.body.cadcnpj;
    res.send("Pergunta recebida " + cadNomeFantacia  +" "+ cadRazaoSocial);
});

app.post("/salvarEquipamento",(req,res) => {
    var CadEquipamento = req.body.CadEquipamento;
    res.send("salvarEquipamento");
});
app.post("/salvarPartEmpresa",(req,res) => {
    var partEmpresa = req.body.partEmpresa;
    var partEmpresaEquipamento = req.body.partEmpresaEquipamento;
    var partEmpresaDescricao = req.body.partEmpresaDescricao;
    res.send("salvarPartEmpresa");
});
app.post("/salvarPartEquipamento",(req,res) => {
    var partEquipamento = req.body.partEquipamento;
    var partEquipamentoDescricao = req.body.partEquipamentoDescricao;
    res.send("salvarPartEquipamento");
});



app.listen(443,()=>{ console.log("Show");}); 

