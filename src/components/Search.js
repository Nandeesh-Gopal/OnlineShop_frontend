import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";

function Search() {
  const [products, setProducts] = useState([]);

 const params = new URLSearchParams(useLocation().search);
const q   = params.get("q") || "";
const min = params.get("min");
const max = params.get("max");

useEffect(() => {
  let url = `http://localhost:5000/product/search?q=${encodeURIComponent(q)}`;
  if (min) url += `&min=${min}`;
  if (max) url += `&max=${max}`;
  fetch(url)
    .then(res => res.json())
    .then(setProducts);
}, [q, min, max]);


  return (
    <div>
      <Nav />
      <h2>Search Results for "{q}"</h2>
      <div className="product-group">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="product" key={item.id}>
              <h2>{item.product}</h2>
              <h5>{item.description}</h5>
              <h3>{item.prize}</h3>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
