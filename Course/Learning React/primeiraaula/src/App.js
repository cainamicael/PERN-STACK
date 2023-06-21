import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState('Valor inicial') //Serve para quardar o valor inicial - o nome só aceita leitura. Para mudar, usa-se o setNome

  useEffect(() => {  //Toda vez que o objeto é modificado, ele captura e renderiza
    console.log(nome)
  }, [nome])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nome</h1>
        <input onChange={e => setNome(e.target.value)}/>
      </header>
    </div>
  );
}

export default App;
