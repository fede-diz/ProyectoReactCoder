import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar.js';
import ItemCount from './components/ItemCount/ItemCount';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {               // Dentro de las llaves {} de cada componente le paso propiedades con formato JavaScript: número, variable, 'un string', unaFuncion()

  const handleOnAdd = () => {
    alert('Se agregó al carrito')
  }

  return (                     // [un, array], {un:x, objeto:y, literal:z}, etc
    <div className="App">
      <Navbar />
      <MercadoLibre />
      <ItemListContainer greeting={'BIENVENIDOS AL HIMALAYA'}/>
      <ItemCount stock={5} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
