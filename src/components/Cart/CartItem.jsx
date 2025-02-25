import React from "react";
import { useCart } from "../../context/CartContext";
import "./styles.css";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="cart-item-category">Men's Clothing</p>
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button className="quantity-btn" onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}>-</button>
          <span className="quantity-value">{item.quantity}</span>
          <button className="quantity-btn" onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
