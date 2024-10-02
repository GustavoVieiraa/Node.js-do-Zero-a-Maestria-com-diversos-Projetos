const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemysql', 'root', '', {
    host: 'localhost',
    port: 8000,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Sequelize conectado com sucesso!')
} catch(err) {
    console.log('Não foi possível conectar: ', err)
}

module.exports = sequelize