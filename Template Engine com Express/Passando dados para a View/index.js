const express = require('express')
const exphbs = require('express-handlebars')
const PORT = 3000
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: "Gustavo",
        lastname: "Vieira",
        age: 21
    }

    res.render('home', {user: user})

})


app.listen(PORT, () => {
    console.log('App running...')
})