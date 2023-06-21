import React from 'react'

export default function Article(props) {
    return(
        <div>
            <article>
                <h1>{props.titulo}</h1>
                <h4>{props.descricao}</h4>
            </article>
            <br />
        </div>
    )
}