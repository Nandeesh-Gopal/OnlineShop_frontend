import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import "../styles/nav.css";

function Nav() {
  const navi = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="main-container">
      <nav className="nav-bar">
        <h1>Online Shop</h1>
        <input type="text" placeholder="search" />
 
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
