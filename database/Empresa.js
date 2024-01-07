const Sequelize = require("sequelize");
const connection = require("./database");

const Empresa = connection.define('empresa', {
    RazãoSocial:{
        type: Sequelize.STRING,
        allowNull: false
    },

    NomeFantacia:{
        type: Sequelize.STRING,
        allowNull: false
    },

    CNPJ:{
        type: Sequelize.STRING,
        allowNull: false
    }

})

Empresa.sync({force: false}). then(() => {});
module.exports = Empresa;