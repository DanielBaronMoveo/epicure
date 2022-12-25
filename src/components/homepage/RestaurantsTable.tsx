import React from "react";
import { NavLink } from "react-router-dom";
import Restaurant from "../../interfaces/restaurant";
import { RestaurantCard } from "../restaurants/RestaurantCard";
import { default as arrow } from "../../assets/images/arrow.svg";
interface RestaurantsTableProps {
  restaurants: Restaurant[];
}

const RestaurantsTable: React.FC<RestaurantsTableProps> = ({ restaurants }) => {
  return (
    <div className="restaurant-table-container">
      <h5>POPULAR RESTAURANTS IN EPICURE:</h5>
      <div className="restaurants">
        {restaurants
          .map((restaurant) => (
            <RestaurantCard key={restaurant._id} item={restaurant} />
          ))
          .slice(0, 3)}
      </div>
      <div className="rest-nav">
        <NavLink to="/restaurants">All Restaurants</NavLink>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default RestaurantsTable;
