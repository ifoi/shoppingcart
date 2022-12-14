import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Shop from './components/Shop';
import productsData from './productsData';

function App() {
  const {products} = productsData;

  return (
    <div className="App">

    <Header></Header>

    <div>
      <Shop products ={products}> </Shop>
      <Cart></Cart>
      
    </div>

      {/* <header className="App-header">
       

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
      </header> */}
    </div>
  );
}

export default App;
