const Sequelize = require("sequelize");
const connection = require("./database");

const PartEmpresa = connection.define('partempresa', {

    empresa:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    equipamento:{
        type: Sequelize.INTEGER,

    },

    particularidade:{
        type: Sequelize.TEXT,
        allowNull: false 
    }

})

PartEmpresa.sync({force: false}). then(() => {});
module.exports = PartEmpresa;