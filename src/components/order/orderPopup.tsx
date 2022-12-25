import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { default as success } from "../../assets/images/success.svg";
import { default as x } from "../../assets/images/x.svg";
import { cartActions } from "../../store/cart/cart.slice";
import { AppDispatch, RootStore } from "../../store/store";
const OrderPopup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootStore) => state.cart.items);
  const handleCheckout = () => {
    dispatch(cartActions.submitOrderToggler());
    dispatch(cartActions.clearCart());
  };
  return (
    <>
      <div className="overlay-popup"></div>
      <div className="pop-up-container flex column align-center space-header">
        <img className="x-icon" src={x} onClick={handleCheckout} />
        <div className="order-image flex align-center justify-center">
          <img src={success} alt="V" />
        </div>
        <div className="titles">
          <h5>Order received</h5>
          <h6>Your food is in process</h6>
          <p>
            Arrive in <span>90:00</span> min
          </p>
        </div>
        <div className="order-items">
          {cartItems.map((item) => (
            <div className="order-item" key={item.dish._id}>
              <p className="dish-name-quantity">
                <span>
                  {item.quantity}
                  <span>x</span>{" "}
                </span>
                {item.dish.name}
              </p>
              <p className="price-per">
                <span>₪</span>
                {item.dish.price}
              </p>
            </div>
          ))}
        </div>
        <div className="total">
          <h2>Total - ₪176</h2>
        </div>
      </div>
    </>
  );
};

export default OrderPopup;
