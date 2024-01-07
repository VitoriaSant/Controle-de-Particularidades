const Sequelize = require("sequelize");
const connection = require("./database");

const PartEmpresa = connection.define('partempresa', {

    empresa:{
        type: Sequelize.STRING,
        allowNull: false
    },

    equipamento:{
        type: Sequelize.STRING,

    },

    particularidade:{
        type: Sequelize.TEXT,
        allowNull: false 
    }

})

PartEmpresa.sync({force: false}). then(() => {});
module.exports = PartEmpresa;