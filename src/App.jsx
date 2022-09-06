import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ItemListContainer from './container/itemlistcontainer';
import ItemDetailContainer from './container/itemDetailContainer';




function App() {
  
  return (
    <div className="App">
      <Navbar/>  
      <ItemListContainer greeting="Tienda de Domótica" color="text-primary"/>
      <ItemDetailContainer/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
    
  );
}

export default App;
