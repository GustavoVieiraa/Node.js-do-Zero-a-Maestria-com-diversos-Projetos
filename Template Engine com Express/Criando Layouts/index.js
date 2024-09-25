const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {
    console.log('App running...')
})