import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import "../styles/nav.css";
import { useState } from "react";

function Nav() {
  const navi = useNavigate();
  const token = localStorage.getItem("token");
  const [search, setsearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = search.trim();
    const params = new URLSearchParams();
    if (q) params.append("q", q);
    if (minPrice) params.append("min", minPrice);
    if (maxPrice) params.append("max", maxPrice);
    navi(`/search?${params.toString()}`);
  };
  return (
    <div className="main-container">
      <nav className="nav-bar">
        <h1>Online Shop</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button type="submit">Go</button>
        </form>
        <div className="sub-nav">
          <a onClick={() => navi("/")}>Home</a>
          {token ? (
            <>
              <a onClick={() => navi("/partner")}>Business Partner</a>
              <a onClick={() => navi("/cart")}>Cart</a>
              <Logout />
            </>
          ) : (
            <>
              <a onClick={() => navi("/signup")}>Signup</a>
              <a onClick={() => navi("/login")}>Login</a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
