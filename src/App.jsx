import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ItemListContainer from './container/itemlistcontainer';
import ItemDetailContainer from './container/itemDetailContainer';

import {BrowserRouter, Routes, Route, useParams} from "react-router-dom"





function App() {
  
  return (  
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Tienda de Domótica" color="text-primary"/>} />
            <Route path="/category/:categoryFilter" element={<ItemListContainer/>} />
            <Route path="/itemDetail/:idItem" element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
