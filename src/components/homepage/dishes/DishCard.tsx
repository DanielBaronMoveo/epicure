import React, { useState } from "react";
import { Dish } from "../../../interfaces/dish";
import OrderModal from "../../order/orderModal";

interface DishCardProps {
  item: Dish;
  isChef?: boolean;
  isDetailedRestaurant?: boolean;
  index?: number;
}

export const DishCard: React.FC<DishCardProps> = ({
  item,
  isChef,
  isDetailedRestaurant,
  index,
}) => {
  const [isOrder, setIsOrder] = useState<boolean>(false);
  return (
    <>
      <div
        className={`dish-card ${isChef ? "weekly-chef-h" : ""} ${
          isDetailedRestaurant ? "pointer" : ""
        }`}
        onClick={
          isDetailedRestaurant ? () => setIsOrder((prev) => !prev) : undefined
        }
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ objectFit: "cover", aspectRatio: "260 / 208" }}
        />
        {!isChef ? (
          <div className="dish-details">
            <h1>{item.name}</h1>
            <h4>{item.ingredients}</h4>
            {index !== 1 && (
              <img
                className="icon"
                src={item.icon}
                alt={item.name}
                height="34"
                width="44"
              />
            )}
            <div className="price">
              <div className="lines"></div>
              <span>₪</span>
              <p>{item.price}</p>
              <div className="lines"></div>
            </div>
          </div>
        ) : (
          <div className="weekly-chef">
            <h2>{item.name}</h2>
          </div>
        )}
      </div>
      {isOrder && (
        <OrderModal dish={item} toggle={() => setIsOrder((prev) => !prev)} />
      )}
    </>
  );
};
