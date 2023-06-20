const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()

app.use(cors())
app.use(express.json())

//Routes


app.listen(5000, () => {
    console.log('The server is runnind on 5000 port')
})