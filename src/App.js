import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/type/:typeName' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
