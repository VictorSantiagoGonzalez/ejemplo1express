const express = require('express')
const app = express()
const port = 3000

app.get('/inicio', (req, res) => {
    res.send('Soy Santiago')
})

app.listen(port, () => {
    console.log('La aplicación se está ejecutando por el puerto ' + port)
})


