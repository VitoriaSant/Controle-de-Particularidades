const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Swal = require('sweetalert2');

const Empresa = require("./database/Empresa");
const Equipamento = require("./database/Equipamento");
const PartEmpresa = require("./database/PartEmpresa");
const PartEquipamento = require("./database/PartEquipamento");


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

app.get ("/ConsultarEmpresa",(req,res) => {
    var 
    PartEmpresa.findall({ where:{}}).then(ListaPartEmpresa => {});
    res.render("ConsultarEmpresa");
});

app.get ("/ConsultarEquipamento",(req,res) => {
    res.render("ConsultarEquipamento");
});

app.post("/salvarEmpresa",(req,res) => {
    var cadRazaoSocial = req.body.cadRazaoSocial;
    var cadNomeFantacia = req.body.cadNomeFantacia;
    var cadcnpj = req.body.cadcnpj;
    
    Empresa.create({
        RazãoSocial: cadRazaoSocial,
        NomeFantacia: cadNomeFantacia,
        CNPJ: cadcnpj
    }). then(() => {
       res.redirect("/");

    }).catch((msgErro) => {
        console.log (msgErro)
    });
});

app.post("/salvarEquipamento",(req,res) => {
    var CadEquipamento = req.body.CadEquipamento;

    Equipamento.create({
        nomeDoEquipamento: CadEquipamento
    }). then(() => {
        res.redirect("/");
 
     }).catch((msgErro) => {
         console.log (msgErro)
     });
});

app.post("/salvarPartEmpresa",(req,res) => {
    var partEmpresa = req.body.partEmpresa;
    var partEmpresaEquipamento = req.body.partEmpresaEquipamento;
    var partEmpresaDescricao = req.body.partEmpresaDescricao;

    PartEmpresa.create({
        empresa: partEmpresa,
        equipamento: partEmpresaEquipamento,
        particularidade: partEmpresaDescricao
    }). then(() => {
        res.redirect("/");
 
     }).catch((msgErro) => {
         console.log (msgErro)
     });
});
app.post("/salvarPartEquipamento",(req,res) => {
    var partEquipamento = req.body.partEquipamento;
    var partEquipamentoDescricao = req.body.partEquipamentoDescricao;

    PartEquipamento.create({
        equipamento: partEquipamento,
        particularidade: partEquipamentoDescricao
    }). then(() => {
        res.redirect("/");
 
     }).catch((msgErro) => {
         console.log (msgErro)
     });
});


app.listen(443,()=>{ console.log("Show");}); 

