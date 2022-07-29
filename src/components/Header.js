import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Header(props) {
    const {cartItems} = props;

    return (
        <header>
            <div> Header section</div> 
            <ul> 
              <li> <NavLink to="/">Home</NavLink> </li>
              <li> <NavLink to="/shop">Shop</NavLink> </li>
              <li> {cartItems ? cartItems.length : " "} </li>
                           
          </ul>
        </header>
        
        );
}