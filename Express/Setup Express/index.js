const express = require('express')
const app = express()
const port = 3000
let contAcess = 0;

app.get('/', (req, res) => {

    contAcess++
    res.send(`Hello World! - access: ${contAcess}`)
    console.log(contAcess)
    
})

app.listen(port, () => {

    console.log(`|App ON| Running PORT ${port} ...`)

})