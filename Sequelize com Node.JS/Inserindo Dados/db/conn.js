const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemysql', 'root', '', {
    host: 'localhost',
    port: 8000,
    dialect: 'mysql'
})

module.exports = sequelize