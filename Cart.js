import React from "react";
import "./Cart.css";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <div className="cart">
      <div className="cart_left">
        <img
          className="cart_ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGPNmhtHGnmrGY7FKGyzalhvzAIa2ljztpg&usqp=CAU"
          alt=""
        />
        <h2 className="cart_title">Your Shopping Cart</h2>
        {/* Cart Items */}
        {/* Cart Items */}
        {/* Cart Items */}
        {/* Cart Items */}
        {/* Cart Items */}
      </div>
      <div className="cart_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
