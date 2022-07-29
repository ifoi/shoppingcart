import React from 'react';

export default function Product(props) {

    const {product, addToCart } = props ;


    return  (
         <div> 
         
          <h2>{product.name } </h2>
          <img src={product.image} alt={product.name} ></img>
         <h3>{product.name}</h3>
         <div>${product.price}</div>
         <button onClick={addToCart}> Add to Cart</button>
         </div> 

    
    );
}