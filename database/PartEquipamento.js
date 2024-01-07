const Sequelize = require("sequelize");
const connection = require("./database");

const PartEquipamento = connection.define('partequipamento', {
    equipamento:{
        type: Sequelize.STRING,
        allowNull: false
    },

    particularidade:{
        type: Sequelize.STRING,
        allowNull: false
    }

})

PartEquipamento.sync({force: false}). then(() => {});
module.exports = PartEquipamento;