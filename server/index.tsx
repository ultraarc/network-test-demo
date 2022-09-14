const express = require('express')
const path = require('path')
const app = express()

const port = 3001

app.all('*', (req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With,Content-Type,Access-Token'
    )
    res.header('Access-Control-Allow-Methods', '*')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

app.post('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})