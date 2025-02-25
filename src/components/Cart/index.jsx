import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

import "./styles.css";

const Cart = () => {
  const { state, dispatch } = useCart();
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>

      {!isOpen && (
        <button className="cart-toggle" onClick={() => setIsOpen(true)}>
          🛒
        </button>
      )}

      <div className={`cart-container ${isOpen ? "open" : "closed"}`}>
        <div className="cart">
          <button className="cart-close" onClick={() => setIsOpen(false)}>✖</button>
          <h2>Cart</h2>
          {state.cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <div className="cart-items">
              {state.cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <button className="clear-cart" onClick={() => dispatch({ type: "CLEAR_CART" })}>
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
