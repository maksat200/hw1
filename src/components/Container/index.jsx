import React, { useEffect, useState } from "react";
import ProductList from "../ProductList";
import FilterButtons from "../FilterButtons";
import Spinner from "../Spinner";

function Container() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); 
        setLoading(false); 
      })
  }, []);

  
  const filterProducts = (category) => {
    setCategory(category); 
    if (category === "all") {
      setFilteredProducts(products); 
    } else {
      
      setFilteredProducts(
        products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
      );
    }
  };

  return (
    <div className="container">
      <FilterButtons category={category} onFilter={filterProducts} />
      {loading ? <Spinner /> : <ProductList products={filteredProducts} />}
    </div>
  );
}

export default Container;
