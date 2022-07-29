import React from 'react';

export default function Cart(props) {
    const {cartItems} = props ;

    return ( 
    <aside> Cart section
        <div>{ cartItems ?  cartItems.length :  " Cart is empty " } </div>
    
    </aside>  
    );
}