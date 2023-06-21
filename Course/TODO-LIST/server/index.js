const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()

app.use(cors())
app.use(express.json())

//Routes
app.post('/todoes', async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query(`INSERT INTO todo (description) VALUES($1) RETURNING *`, [description]) //Avoid SQL Injections
        res.status(201).json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log('The server is runnind on 5000 port')
})
