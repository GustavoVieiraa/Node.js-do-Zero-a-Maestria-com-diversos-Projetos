const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})
const PORT = 3000
const app = express()


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/dashboard', (req, res) => {
    const users = [
        {
            name: 'Gustavo',
            lastname: 'Vieira',
            age: 21,
            createAccount: '25/09/2024',
            isBeta: true,
            permissoes: [
                'VIP', 'Admin', 'Helper', 'Staff'
            ]
        },
        {
            name: 'Rafael',
            lastname: 'Dutra',
            age: 25,
            createAccount: '25/09/2024',
            isBeta: false,
            permissoes: [
                'VIP', 'Admin', 'Helper', 'Staff'
            ]
        }
    ]

    res.render('dashboard', {users})
})


app.get('/', (req, res) => {

    const auth = true

    res.render('home', {auth})
})


app.listen(PORT, () => {
    console.log('App running...')
})