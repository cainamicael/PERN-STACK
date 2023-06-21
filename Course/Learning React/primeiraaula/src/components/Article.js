import React from 'react'

export default function Article(props) {
    let numero = 1256
    return(
        <div>
            <article>
                <h1>{props.titulo}</h1>
                <h4>{props.descricao}</h4>
                <h5>Número de letras no artigo: {numero}</h5>
            </article>
            <br />
        </div>
    )
}