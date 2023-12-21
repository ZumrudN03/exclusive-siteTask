import React, { useContext } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { SearchContext } from "../../Context/search";
import { BasketContext } from "../../Context/basket";
import { WishlistContext } from "../../Context/wishlist";

function Navbar() {
  const { heandleSearch } = useContext(SearchContext)
  const { basket } = useContext(BasketContext)
  const { wishlist } = useContext(WishlistContext)

  return (
    <div className="navbar">
      <div className="navbar_upside_bg">
        <div className="navbar_upside">
          <div></div>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#"> ShopNow</a>
          </p>
          <select>
            <option>English</option>
            <option>Russian</option>
          </select>
        </div>
      </div>
      <div className="navMenu_bg">
        <div className="navMenu">
          <div className="navbar_logo">
            <Link to={"/"}><p>Exclusive</p></Link>
          </div>
          <div className="navbar_menu">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/singUp"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              Sing Up
            </NavLink>
          </div>
          <div className="navbar_icons">
            <input type="text" placeholder="What are you looking for?" onChange={(e) => heandleSearch(e)} />
            <i className="fa-solid fa-magnifying-glass"></i>
            <NavLink
              to="/wishlist"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#DB4444" : "black",
                };
              }}
            >
              <i className="fa-regular fa-heart"><sup>{wishlist.length ? wishlist.length : "0"}</sup></i>
            </NavLink>
            
            <NavLink
              to="/basket"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#DB4444" : "black",
                };
              }}
            >
              <i className="fa-solid fa-cart-shopping"><sup>{basket.length ? basket.length : "0"}</sup></i>
            </NavLink>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
