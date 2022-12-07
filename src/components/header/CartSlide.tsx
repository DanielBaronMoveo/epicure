import React from "react";
import { default as cartIcon } from "../../assets/images/cart-icon.svg";
import { default as x } from "../../assets/images/x.svg";

interface CartSlideProps {
  isCart: boolean;
  toggleCart: () => void;
}
const CartSlide: React.FC<CartSlideProps> = ({ isCart, toggleCart }) => {
  return (
    <div className={`cart-container ${isCart ? "show-cart" : ""}`}>
      <img src={x} alt="" onClick={toggleCart} className="nav-icon" />
      <img src={cartIcon} alt="cart-icon" className="cart-icon" />
      <h5>Your bag is empty</h5>
    </div>
  );
};

export default CartSlide;
