const express = require('express')
const cors = require('cors')
const pool = require('./db')
const app = express()

app.use(cors())
app.use(express.json())

//Routes
//List routes
app.get('/todoes', async (req, res) => {
    try {
        const todoes = await pool.query(`SELECT * FROM todo`)
        res.status(200).json(todoes.rows)
    } catch (error) {
        console.error(error.message)
    }
})

app.get('/todoes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query(`SELECT * FROM todo WHERE todo_id = $1`, [id])

        if(!todo.rows[0]) { return res.status(400).json({message: "Não encontrado!"}) }

        res.status(200).json(todo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//Insert route
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
