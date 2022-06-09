const { Sequelize } = require("sequelize");
const database = require("../database/bd");

const Socios = database.sequelize.define("socios", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco:{
    type: Sequelize.STRING,
    allowNull: false,
  }
},
{
    freezeTableName: true,
    timestamps: false,
    createAt: false,
    updateAt: false,
}
);

module.exports = Socios;