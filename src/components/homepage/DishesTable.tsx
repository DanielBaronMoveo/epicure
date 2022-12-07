import React from "react";
import { NavLink } from "react-router-dom";
import { Dish } from "../../interfaces/dish";
import { DishCard } from "./dishes/DishCard";
import { default as arrow } from "../../assets/images/arrow.svg";

interface DishesTableProps {
  dishes: Dish[];
  isDetailedRestaurant?: boolean;
}

const DishesTable: React.FC<DishesTableProps> = ({
  dishes,
  isDetailedRestaurant,
}) => {
  return (
    <div className="dish-table-container">
      {!isDetailedRestaurant ? (
        <>
          <h6>SIGNATURE DISH OF:</h6>
          <div className="dishes">
            {dishes
              .map((dish) => <DishCard key={dish._id} dish={dish} />)
              .slice(0, 3)}
          </div>
          <div className="rest-nav">
            <NavLink to="/restaurants">All Restaurants</NavLink>
            <img src={arrow} alt="" />
          </div>
        </>
      ) : (
        <div className="dishes">
          {dishes.map((dish) => (
            <DishCard key={dish._id} dish={dish} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DishesTable;
