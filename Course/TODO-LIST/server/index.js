const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.listen(5000, () => {
    console.log('The server is runnind on 5000 port')
})