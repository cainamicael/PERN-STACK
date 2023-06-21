import logo from './logo.svg';
import './App.css';
import Texto from './Texto'
import Article from './components/Article'

function App() {
  return (
    <div className="App">
      <h1>Blog da DankiCode</h1>
      <h2>Ciência e tecnologia</h2>
      <hr />

      <Article titulo="Notícia 01" descricao="Descrição da notícia 01"></Article>

    </div>
  );
}

export default App;
