const Sequelize = require("sequelize");
const connection = require("./database");

const Equipamento = connection.define('equipamento', {
    nomeDoEquipamento: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

Equipamento.sync({force: false}). then(() => {});
module.exports =  Equipamento;