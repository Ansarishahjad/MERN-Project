import React, { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import cart from "../cart-icon.png"

import { itemContext } from "../context/itemContext";

const Header = () => {

    const { itemsInCart, totalPrice } = useContext(itemContext)

    return (
        <div className='header' >
            <h1 className='gfg ' >
                Online Fruit & Vegetable Market
                <img src={cart} width={40} alt="" />
            </h1>
            
            <h3 style={{ color: "green" }}>
                Total Price: {totalPrice}
            </h3>
            <div className='cart-num'>
                <div className='cart-items'>
                    {itemsInCart}
                </div>
                <div className='shop'>
                <FaCartShopping />
                </div>
            </div>
        </div>
    );
};

export default Header;