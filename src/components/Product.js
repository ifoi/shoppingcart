import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default function Product(props) {

    const {product, addToCart, removeFromCart} = props;

   const quantity = 2 ;
    return  (
       <Card ClassName="h-100"> 
         
          <h2>{product.name } </h2>
          <Card.Img src={product.image}
                 alt={product.name}
                 height="200px"
                //  style={{objectFit: "contain"}}
            />

          <Card.Body className="d-flex flex-column"> 
            <Card.Title  className="d-flex justify-content-between">       
                <span> {product.name}</span>
                <span className="ms-2">${product.price}</span>
                </Card.Title>

          {quantity ===0 ? (
            <Button onClick={addToCart}> Add to Cart</Button> )
              : <>
               <div className="align-items-center justify-content-center" 
              style={{gap: ".5rem"}}> <Button> - </Button>  

             {quantity} in cart 

            <Button onClick={addToCart}> +</Button>  
            <Button onClick={removeFromCart} className="btn btn-danger"> Remove</Button>
            </div>
            </>
            }
 

         </Card.Body>
         
         </Card> 

    
    );
}