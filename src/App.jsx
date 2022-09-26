import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ItemListContainer from './container/itemlistcontainer';
import ItemDetailContainer from './container/itemDetailContainer';
import CartContext from './contexts/cartContext';
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Cart from './components/cart';






function App() {
  
  return (  
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <Navbar/> 
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Tienda de Domótica" color="text-primary"/>} />
              <Route path="/category/:categoryFilter" element={<ItemListContainer/>} />
              <Route path="/itemDetail/:idItem" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
      </CartContext>  
     
     
    </div>
    
  );
}

export default App;
