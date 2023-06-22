import React, { Fragment, useState } from 'react'

const InputTodo = () => {
    const [description, setDescription] = useState('')

    const submiting = async e => {
        e.preventDefault()

        try {
            const body = { description }
            const response = await fetch('http://localhost:5000/todoes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

            window.location = '/'
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Afazeres</h1>
            <form className="d-flex mt-5" onSubmit={submiting}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button type="submit" className="btn btn-success">
                    Adicionar
                </button>
            </form>
        </Fragment>
    )
}

export default InputTodo
