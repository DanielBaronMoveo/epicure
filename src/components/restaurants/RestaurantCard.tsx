import React from "react";
import { NavLink } from "react-router-dom";
import Restaurant from "../../interfaces/restaurant";
import { default as stars } from "../../assets/images/star.svg";
import { default as emptystar } from "../../assets/images/empty-star.svg";
type IRestaurant = {
  item: Restaurant;
};

export const RestaurantCard: React.FC<IRestaurant> = ({ item }) => {
  return (
    <div className="restaurant-card">
      <NavLink className="clean-link" to={`/restaurants/${item._id}`}>
        <img
          src={item.thumb}
          alt={item.name}
          style={{
            objectFit: "cover",
            aspectRatio: "224 / 206",
          }}
        />
        <h2>{item.name}</h2>
        {/* <p>{item.chef}</p> */}
        <p>{item.chef.map((chef) => chef.name)}</p>
        <div className="stars">
          {[...Array(item.stars)].map((_, i) => (
            <img src={stars} alt="" key={i} />
          ))}
          {[...Array(5 - item.stars)].map((_, i) => (
            <img src={emptystar} alt="" key={i} />
          ))}
        </div>
      </NavLink>
    </div>
  );
};
