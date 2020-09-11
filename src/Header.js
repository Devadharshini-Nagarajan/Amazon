import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import "./Header.css";
import { auth } from "./firebase";

function Header() {
  const [state, dispatch] = useContext(StateContext);
  const handleAuth = () => {
    if (state.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInp" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option" onClick={handleAuth}>
          <span className="header_optionline1">Hello {state.user?.email}</span>
          <Link to={!state.user && "/login"}>
            <span className="header_optionline2" style={{ color: "white" }}>
              {state.user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>
        <div className="header_option">
          <span className="header_optionline1">Returns</span>
          <span className="header_optionline2">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionline1">Your</span>
          <span className="header_optionline2">Prime</span>
        </div>
        <div className="header_basket">
          <Link to="/checkout">
            <ShoppingBasketIcon style={{ color: "white" }} />
            <span
              className="header_optionline2 header_basketCount"
              style={{ color: "white" }}
            >
              {state.basket.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
