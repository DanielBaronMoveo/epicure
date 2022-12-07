import React from "react";
import { Dish } from "../../../interfaces/dish";

interface DishCardProps {
  dish: Dish;
  isChef?: boolean;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, isChef }) => {
  return (
    <div className="dish-card">
      <img
        // src={require(`../../../${dish.image}`)}
        src={dish.image}
        alt={dish.name}
        style={{ objectFit: "cover", aspectRatio: "260 / 208" }}
      />
      {!isChef ? (
        <div className="dish-details">
          <h1>{dish.name}</h1>
          <h4>{dish.ingredients}</h4>
          <img
            className="icon"
            // src={require(`../../../${dish.icon}`)}
            src={dish.icon}
            alt={dish.name}
            height="34"
            width="44"
          />
          <div className="price">
            <div className="lines"></div>₪&nbsp;<h1>{dish.price}</h1>
            <div className="lines"></div>
          </div>
        </div>
      ) : (
        <div className="weekly-chef">
          <h2>{dish.name}</h2>
        </div>
      )}
    </div>
  );
};
