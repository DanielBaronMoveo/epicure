import React, { useState } from "react";
import { default as x } from "../../assets/images/x.svg";
import { Dish } from "../../interfaces/dish";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../../store/store";
import { cartActions } from "../../store/cart/cart.slice";

interface IProps {
  toggle: () => void;
  dish: Dish;
}

const OrderModal = ({ toggle, dish }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const temp = useSelector((state: RootStore) => state.cart.items);
  console.log(temp);

  const [cart, setCart] = useState({
    dish: dish,
    side: "",
    changes: [] as string[],
    quantity: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { name } = e.target;
    if (name === "changes") {
      if (e.target.checked) {
        setCart({ ...cart, changes: [...cart.changes, value] });
      } else {
        setCart({
          ...cart,
          changes: cart.changes.filter((change) => change !== value),
        });
      }
    } else {
      setCart({ ...cart, [name]: value });
    }
  };

  const handleQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (cart.quantity === 1 && e.currentTarget.name === "decrement") return;
    const { name } = e.currentTarget;
    if (name === "increment") {
      setCart({ ...cart, quantity: cart.quantity + 1 });
    } else if (name === "decrement") {
      setCart({ ...cart, quantity: cart.quantity - 1 });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(cart);
    dispatch(cartActions.addToCart(cart));
    toggle();
  };

  return (
    <>
      <div className="order-overlay" onClick={toggle}></div>
      <div className="order-modal">
        <div className="controls-container">
          <img src={x} alt="" onClick={toggle} />
        </div>
        <img
          src={dish.image}
          alt={dish.name}
          style={{
            objectFit: "cover",
            aspectRatio: "224 / 206",
          }}
          className="dish-image"
        />
        <div className="dish-details">
          <h1>{dish.name}</h1>
          <h4>{dish.ingredients}</h4>
          <img className="labels-icon" src={dish.icon} alt={dish.name} />
          <div className="price">
            <div className="lines"></div>₪&nbsp;<h3>{dish.price}</h3>
            <div className="lines"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="radio-container flex column align-center">
            <h5>Choose a side</h5>
            <div className="radio">
              <input
                type="radio"
                id="white"
                name="side"
                value="White Bread"
                onChange={handleChange}
              />
              <label htmlFor="white">White bread</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="sticky"
                name="side"
                value="Sticky Rice"
                onChange={handleChange}
              />
              <label htmlFor="sticky">Sticky rice</label>
            </div>
          </div>
          <div className="checkbox-container flex column justify-center">
            <h5>Changes</h5>
            <div className="checkbox">
              <input
                type="checkbox"
                id="peanuts"
                name="changes"
                value="Without Peanuts"
                onChange={handleChange}
              />
              <label htmlFor="peanuts">Without peanuts</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                id="spicy"
                name="changes"
                value="Sticky Less Spicy"
                onChange={handleChange}
              />
              <label htmlFor="spicy">Sticky Less Spicy</label>
            </div>
          </div>
          <div className="quantity-container">
            <h5>Quantity</h5>
            <div className="quantity">
              <button
                className="minus"
                type="button"
                name="decrement"
                onClick={handleQuantity}
              >
                -
              </button>
              <input type="number" value={cart.quantity} readOnly />
              <button
                className="plus"
                type="button"
                name="increment"
                onClick={handleQuantity}
              >
                +
              </button>
            </div>
          </div>
          <button className="add-bag-btn">Add to bag</button>
        </form>
      </div>
    </>
  );
};

export default OrderModal;
