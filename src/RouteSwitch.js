import React , {useState} from 'react' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';

const RouteSwitch = () => {
 const {cartItems, setCartItems} = useState([]) ;

 const addToCart =(product) => {
    const itemExist= cartItems.find[item => item.id === product.id];
    if(itemExist) {
      setCartItems(cartItems.map( (item) => 
                item.id === product.id ? {...item.id, ...itemExist, qty: item.qty + product.qty }
                                       : item )
      );                       
              
    }else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }

  };


  return (
     <BrowserRouter>
       <Header cartItems={cartItems} />
        <Routes>
            <Route path="/shoppingcart" element={<Home />} />
            <Route path="/shoppingcart/shop" element={<App cartItems={cartItems} addToCart ={addToCart} />} />
                        
        </Routes>
        
        {/* <Cart  /> ; */}
     
     </BrowserRouter>
    
    )
}

export default RouteSwitch ;