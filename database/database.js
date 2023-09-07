const Sequelize = require("sequelize")
const database = "guiaperguntas"
const user = "root"
const password = "bancodedados1234"     //coloque a senha do seu banco de dados

const connection = new Sequelize(database,user,password,{
    host:"localhost",
    dialect:"mysql"
})

module.exports = connection