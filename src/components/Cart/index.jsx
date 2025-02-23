import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem";
import "./styles.css";

const Cart = () => {
  const { state, dispatch } = useCart();
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {state.cart.length === 0 ? <p>Cart is empty</p> : state.cart.map(item => <CartItem key={item.id} item={item} />)}
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>
    </div>
  );
};

export default Cart;
