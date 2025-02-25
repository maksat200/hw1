import React from "react";
import { useCart } from "../../context/CartContext";
import "./styles.css";

const ProductCard = ({ product }) => {
  const { state, dispatch } = useCart();
  const inCart = state.cart.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-category">Men's Clothing</p>
      <h3 className="product-title">{product.title}</h3>

      <div className="product-footer">
        <p className="product-price">${product.price}</p>
        {inCart ? (
          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: product.id })}
            >
              -
            </button>
            <span className="quantity-value">{inCart.quantity}</span>
            <button
              className="quantity-btn"
              onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: product.id })}
            >
              +
            </button>
          </div>
        ) : (
          <button className="add-to-cart" onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
