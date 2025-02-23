import React from "react";
import { useCart } from "../../context/CartContext";
import "./styles.css";

const ProductCard = ({ product }) => {
  const { state, dispatch } = useCart();
  const inCart = state.cart.find(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      {inCart ? (
        <div className="quantity-controls">
          <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: product.id })}>-</button>
          <span>{inCart.quantity}</span>
          <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: product.id })}>+</button>
        </div>
      ) : (
        <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
