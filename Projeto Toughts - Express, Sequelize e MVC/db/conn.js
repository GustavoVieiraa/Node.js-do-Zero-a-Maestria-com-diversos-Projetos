const { Sequelize } = require('sequelize')


require('dotenv').config();
const port = process.env.PORTDB
const dbUrl = process.env.DATABASE_URL


const sequelize = new Sequelize('toughts', 'root', '', {
    host: dbUrl,
    port: port,
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log(`|DB| Conectado! [PORT: ${port}]`)
} catch (error) {
    console.log(error)
}

module.exports = sequelize