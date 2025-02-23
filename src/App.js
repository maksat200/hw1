import React from "react";
import ProductContainer from "./components/Container";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <ProductContainer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
