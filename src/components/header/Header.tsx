import React, { useEffect, useState } from "react";
import SearchSlide from "./SearchSlide";
import { default as cartIcon } from "../../assets/images/cart-icon.svg";
import { default as userIcon } from "../../assets/images/user-icon.svg";
import { default as logo } from "../../assets/images/epicure-logo.svg";
import { default as search } from "../../assets/images/search-icon.svg";
import { default as hamburger } from "../../assets/images/opening-menu-icon.svg";
import { default as x } from "../../assets/images/x.svg";
import { NavLink, useLocation } from "react-router-dom";
import CartSlide from "./CartSlide";
import UserModal from "./UserModal";
import OrderPopup from "../order/orderPopup";
import { useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import { ILink } from "../../interfaces/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isCart, setIsCart] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(false);
  const isOrder = useSelector((state: RootStore) => state.cart.isOrder);
  const quantity = useSelector((state: RootStore) => state.cart.quantity);
  const location = useLocation();
  const [navLinks, setNavLinks] = useState<ILink[]>([
    { path: "restaurants", isActive: false, value: "Restaurants" },
    { path: "chefs", isActive: false, value: "Chefs" },
  ]);

  useEffect(() => {
    const prevNavLink = [...navLinks];
    const link = navLinks.findIndex(
      (li) => `/${li.path}` === location.pathname
    );
    if (link === -1) return;
    prevNavLink.map((link) => (link.isActive = false));
    if (link >= 2) {
      prevNavLink[link].isActive = true;
    }
    setNavLinks(prevNavLink);
  }, [location.pathname]);

  const toggleMenu = () => {
    setShowMenu((prevMenu) => !prevMenu);
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
      <header>
        <div className="container flex align-center space-between">
          <div className="hamburger">
            <img
              src={hamburger}
              className="nav-icon"
              alt="menu"
              onClick={toggleMenu}
            />
          </div>
          <div className="nav-links">
            <div className="logo">
              <NavLink className="clean-link" to="/">
                <img src={logo} alt="mini logo" />
              </NavLink>
            </div>
            <ul className="links clean-list">
              <span className="home">
                <NavLink to="/" className="clean-link">
                  Epicure
                </NavLink>
              </span>
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className={link.isActive ? "active" : ""}
                  onClick={() => {
                    const prevNavLink = [...navLinks];
                    prevNavLink.map((link) => (link.isActive = false));
                    link.isActive = true;
                    setNavLinks(prevNavLink);
                  }}
                >
                  <NavLink to={`/${link.path}`} className="clean-link">
                    {link.value}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-icons">
            <img
              src={search}
              className="nav-icon"
              alt="search-bar"
              onClick={toggleSearch}
            />
            <img
              src={userIcon}
              className="nav-icon"
              alt="user"
              onClick={toggleUser}
            />
            <div className="header-cart flex">
              {quantity > 0 && (
                <span className="cart-quantity">{quantity}</span>
              )}
              <img
                src={cartIcon}
                onClick={toggleCart}
                className="nav-icon"
                alt="cart"
              />
            </div>
          </div>
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
      {isOrder && <OrderPopup />}
    </>
  );
};

export default Header;
