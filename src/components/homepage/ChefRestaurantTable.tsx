import React from "react";
import { Dish } from "../../interfaces/dish";
import { DishCard } from "./dishes/DishCard";

interface ChefRestaurantTableProps {
  dishes: Dish[];
}

const ChefRestaurantTable: React.FC<ChefRestaurantTableProps> = ({
  dishes,
}) => {
  return (
    <div className="chef-table">
      {dishes
        .map((dish) => <DishCard key={dish._id} item={dish} isChef={true} />)
        .slice(3, 6)}
    </div>
  );
};

export default ChefRestaurantTable;
