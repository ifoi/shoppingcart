import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default function Product(props) {

    const {product, addToCart } = props ;


    return  (
         <Card > 
         
          <h2>{product.name } </h2>
          <Card.Img src={product.image} alt={product.name} ></Card.Img>
         <h3>{product.name}</h3>
         <div>${product.price}</div>
         <Button onClick={addToCart}> Add to Cart</Button>
         </Card> 

    
    );
}