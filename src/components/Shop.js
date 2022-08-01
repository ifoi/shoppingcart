import React from 'react';
import Product from './Product';
import {Container, Button} from 'react-bootstrap';

export default function Shop(props) {
    const {products, addToCart} = props;

    return (
    <>
    <Container >
    <div> <h2>Products Page </h2>
        
         {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart}></Product>

         )) }


    </div> </Container>
    </>
    );
}