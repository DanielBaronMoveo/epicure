import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../store/store";
import { default as lockIcon } from "../assets/images/lock_icon.svg";
import { cartActions } from "../store/cart/cart.slice";
import { useNavigate } from "react-router";
const Checkout = () => {
  const cartItems = useSelector((state: RootStore) => state.cart.items);
  const total = useSelector((state: RootStore) => state.cart.total);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/");
    window.scrollTo(0, 0);
    dispatch(cartActions.submitOrderToggler());
  };
  return (
    <div className="checkout-container">
      <div className="delivery-container">
        <div className="delivery-details">
          <div>
            <h5>Delivery details</h5>
          </div>
          <div className="delivery-details-inputs">
            <div className="delivery-details-input">
              <label htmlFor="fullname">
                Full Name
                <input type="text" id="fullname" />
              </label>
            </div>
            <div className="delivery-details-input">
              <label htmlFor="phone">
                Phone
                <input type="text" id="phone" />
              </label>
            </div>
            <div className="delivery-details-input">
              <label htmlFor="address">
                Address
                <input type="text" id="address" />
              </label>
            </div>
          </div>
        </div>
        <div className="payment-details">
          <div>
            <h6>Payment details</h6>
          </div>
          <div className="payment-details-inputs">
            <label>
              Card Number
              <input type="text" id="card-number" />
            </label>
            <label>
              Name on Card
              <input type="text" id="card-name" />
            </label>
            <label>
              CVV
              <input type="text" id="card-cvv" />
            </label>
            <label>
              Expiry Date
              <input type="text" id="card-ex" />
            </label>
          </div>
        </div>
      </div>
      <div className="checkout-order-container">
        <div className="cart-items-container">
          <h5>My order</h5>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.dish._id}>
                <div className="cart-item-img">
                  <img src={item.dish.image} alt="dish-img" />
                </div>
                <div className="cart-item-info">
                  <h6>
                    x{item.quantity} {item.dish.name}
                  </h6>
                  <p>
                    {item.side ? `${item.side} | ` : ""}
                    {item.changes.length > 1
                      ? item.changes.join(" | ")
                      : item.changes}
                  </p>
                  <p className="cart-item-price">₪&nbsp;{item.dish.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h5>Total - ₪{total}</h5>
            <button onClick={handleCheckout}>
              <img src={lockIcon} />
              Complete payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
