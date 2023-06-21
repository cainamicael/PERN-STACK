import './App.css';
import Article from './components/Article'

function App() {
  return (
    <div className="App">
      <h1>Blog da DankiCode</h1>
      <h2>Ciência e tecnologia</h2>
      <hr />

      <Article titulo="Notícia 01" descricao="Descrição da notícia 01"></Article>
      <Article titulo="Notícia 02" descricao="Descrição da notícia 02"></Article>

    </div>
  );
}

export default App;
