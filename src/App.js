import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar.js';

function App() {               // Dentro de las llaves {} de cada componente le paso propiedades con formato JavaScript: número, variable, 'un string', unaFuncion()
  return (                     // [un, array], {un:x, objeto:y, literal:z}, etc
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'BIENVENIDOS AL HIMALAYA'}/>
    </div>
  );
}

export default App;
