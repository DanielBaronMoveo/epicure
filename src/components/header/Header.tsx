import React, { useState } from "react";
import SearchSlide from "./SearchSlide";
import { default as cartIcon } from "../../assets/images/cart-icon.svg";
import { default as userIcon } from "../../assets/images/user-icon.svg";
import { default as logo } from "../../assets/images/epicure-logo.svg";
import { default as search } from "../../assets/images/search-icon.svg";
import { default as hamburger } from "../../assets/images/opening-menu-icon.svg";
import { default as x } from "../../assets/images/x.svg";
import { NavLink } from "react-router-dom";
import CartSlide from "./CartSlide";
import UserModal from "./UserModal";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isCart, setIsCart] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu((prevMenu) => !prevMenu);
    console.log(showMenu);
  };
  const toggleSearch = () => {
    setIsSearch((prevSearch) => !prevSearch);
  };
  const toggleCart = () => {
    setIsCart((prevCart) => !prevCart);
  };
  const toggleUser = () => {
    setIsUser((prevUser) => !prevUser);
  };

  return (
    <>
      <header className="header">
        <div className="main-nav">
          <ul className="clean-list">
            <li className="home">
              <NavLink to="/" className="clean-link">
                Epicure
              </NavLink>
            </li>
            <li>
              <NavLink to="/restaurants" className="clean-link">
                Restaurants
              </NavLink>
            </li>
            <li>
              <NavLink className="clean-link" to="/chefs">
                Chefs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <img
            src={hamburger}
            className="nav-icon"
            alt="menu"
            onClick={toggleMenu}
          />
        </div>
        <div className="logo">
          <NavLink className="clean-link" to="/">
            <img src={logo} alt="mini logo" />
          </NavLink>
        </div>
        <div>
          <img
            src={search}
            className="nav-icon"
            alt="search-bar"
            onClick={toggleSearch}
          />
          <img
            src={cartIcon}
            onClick={toggleCart}
            className="nav-icon"
            alt="cart"
          />
          <img
            src={userIcon}
            className="nav-icon"
            alt="user"
            onClick={toggleUser}
          />
        </div>
      </header>
      {showMenu && (
        <div className={`opening-menu ${showMenu ? "show-menu" : ""}`}>
          <div>
            <img src={x} onClick={toggleMenu} className="nav-icon" />
          </div>
          <NavLink
            to="/restaurants"
            className="clean-link"
            onClick={toggleMenu}
          >
            Restaurants
          </NavLink>
          <NavLink to="/chefs" className="clean-link" onClick={toggleMenu}>
            Chefs
          </NavLink>
          <div className="menu-bottom">
            <a onClick={toggleMenu}>Contact Us</a>
            <a onClick={toggleMenu}>Terms of Use</a>
            <a onClick={toggleMenu}>Privacy Policy</a>
          </div>
        </div>
      )}
      {isSearch && (
        <SearchSlide isSearch={isSearch} toggleSearch={toggleSearch} />
      )}
      {isCart && <CartSlide isCart={isCart} toggleCart={toggleCart} />}
      {isUser && <UserModal isUser={isUser} toggleUser={toggleUser} />}
    </>
  );
};

export default Header;
