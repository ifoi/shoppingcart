import React from 'react';
import Product from './Product';

export default function Shop(props) {
    const {products} = props;

    return (
    <div> <h2>Products Page </h2>

         {products.map((product) => (
            <Product key={product.id} product={product}></Product>

         )) }


    </div>
    );
}