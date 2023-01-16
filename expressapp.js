const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('hello world!')
})

app.get('/about', (req, res) =>{
    res.send('It Works 111111')
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})