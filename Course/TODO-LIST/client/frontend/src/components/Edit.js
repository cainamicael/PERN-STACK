import React, { Fragment, useState } from 'react'

const EditTodo = ({ todo }) => { //Prop
    const [description, setDescription] = useState(todo.description)

    const updateDescription = async e => {
        e.preventDefault()

        try {
            const body = { description }
            const response = await fetch(`http://localhost:5000/todoes/${todo.todo_id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })

            window.location = '/'
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Editar</button>
            <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Editar Afazer</h4>
                            <button 
                                type="button" 
                                className="close" 
                                data-dismiss="modal" 
                                onClick={() => setDescription(todo.description)}
                            >
                                X
                            </button>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                        </div>

                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-warning" 
                                data-dismiss="modal" 
                                onClick={e => updateDescription(e)} 
                            >
                                Editar
                            </button>

                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                data-dismiss="modal" 
                                onClick={() => setDescription(todo.description)} 
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo
