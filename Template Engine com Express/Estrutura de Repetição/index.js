const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const user = {
        name: 'Gustavo',
        lastname: 'Vieira',
        age: 21
    }

    const permissoes = [
        'VIP', 'Admin', 'Helper', 'Staff'
    ]

    res.render('dashboard', {user: user, permissoes})
})

app.get('/', (req, res) => {

    const auth = true

    res.render('home', {auth})
})


app.listen(PORT, () => {
    console.log('App running...')
})