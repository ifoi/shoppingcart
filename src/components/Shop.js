import React from 'react';
import Product from './Product';
import {Container, Button, Row, Col} from 'react-bootstrap';

export default function Shop(props) {
    const {products, addToCart} = props;

    return (
    <>
    <Container >
    <div> <h2>Products Page </h2>
         <Row md={2} xs={1} lg={3}> 
         {products.map((product) => (
          <Col>
          <Product key={product.id} product={product} addToCart={addToCart}></Product>
            </Col>  
         )) }
        </Row> ; 


    </div> </Container>
    </>
    );
}