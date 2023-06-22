import React, { Fragment, useEffect, useState } from 'react'

const ListTodo = () => {
  const [todoes, setTodoes] = useState([])

  const deleteTodo = async id => {
    try { 
        await fetch(`http://localhost:5000/todoes/${id}`, {
            method: 'DELETE'
        })

        setTodoes(todoes.filter(todo => todo.todo_id !== id))
    } catch (error) {
        console.log(error)
    }
  }

  const getTodoes = async () => {
    try {
      const response = await fetch('http://localhost:5000/todoes')
      const jsonData = await response.json()

      setTodoes(jsonData)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getTodoes()
  }, [])

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {todoes.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Editar</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodo
