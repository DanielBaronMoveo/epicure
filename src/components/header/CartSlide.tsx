import React from "react";
import { default as cartIcon } from "../../assets/images/cart-icon.svg";
import { default as x } from "../../assets/images/x.svg";
import { useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import { useNavigate } from "react-router";

interface CartSlideProps {
  isCart: boolean;
  toggleCart: () => void;
}
const CartSlide: React.FC<CartSlideProps> = ({ isCart, toggleCart }) => {
  const cartItems = useSelector((state: RootStore) => state.cart.items);
  const total = useSelector((state: RootStore) => state.cart.total);
  const navigate = useNavigate();
  const handleAddToCart = () => {
    toggleCart();
    navigate("/checkout");
  };
  return (
    <div
      className={`cart-container ${isCart ? "show-cart" : ""} ${
        cartItems.length ? "with-items" : ""
      }`}
    >
      {/* <img src={x} alt="" onClick={toggleCart} className="nav-icon" /> */}
      {!cartItems.length ? (
        <>
          <div className="empty-cart">
            <img src={cartIcon} alt="cart-icon" className="cart-icon" />
            <h5>Your bag is empty</h5>
          </div>
          <div className="cart-controls">
            <button>Check history</button>
          </div>
        </>
      ) : (
        <div className="cart-items-container">
          <h5>My order</h5>
          <h6>Mashya</h6>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.dish._id}>
                <div className="cart-item-img">
                  <img src={item.dish.image} alt="dish-img" />
                </div>
                <div className="cart-item-info">
                  <h4>
                    x{item.quantity} {item.dish.name}
                  </h4>
                  <p>
                    {item.side ? `${item.side} | ` : ""}
                    {item.changes.length > 1
                      ? item.changes.join(" | ")
                      : item.changes}
                  </p>
                  <span className="cart-item-price">
                    <span>₪</span>
                    {item.dish.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h5>Total - ₪{total}</h5>
            <button className="order-history">Check history</button>
            <button onClick={handleAddToCart}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSlide;
