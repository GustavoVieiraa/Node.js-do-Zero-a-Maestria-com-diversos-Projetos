const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8000
}) 

try {

    sequelize.authenticate()
    console.log(`Conectamos ao MySQL`)

} catch (err) {
    console.log(`Não foi possível conectar: ${err}`)
}


module.exports = sequelize