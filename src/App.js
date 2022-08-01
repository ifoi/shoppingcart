import './App.css';
// import Header from './components/Header';
import Cart from './components/Cart';
import Shop from './components/Shop';
import productsData from './productsData';

function App(props) {
  const {products} = productsData;
  const {cartItems, addToCart} = props;

  // const addToCart =(product) => {
  //   const itemExist= cartItems.find[item => item.id === product.id];
  //   if(itemExist) {
  //     setCartItems(cartItems.map( (item) => 
  //               item.id === product.id ? {...item.id, ...itemExist, qty: item.qty + product.qty }
  //                                      : item )
  //     );                       
              
  //   }else {
  //     setCartItems([...cartItems, {...product, qty: 1}]);
  //   }

  // };


  return (
    <div className="App">

    {/* <Header></Header> */}

        <div>
          <Shop products ={products} addToCart ={addToCart}/>
          <Cart addToCart={addToCart} cartItems={cartItems} />           
        </div>

    
    </div>
  );
}

export default App;
