import React, { useEffect } from "react";
import ChefRestaurantCarousel from "./ChefRestaurantCarousel";
import { Dish } from "../../interfaces/dish";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import { getChef } from "../../store/chef/chef.action";
import MediaQuery from "react-responsive";
import ChefRestaurantTable from "./ChefRestaurantTable";

interface WeeklyChefProps {
  dishes: Dish[];
}

export const WeeklyChef: React.FC<WeeklyChefProps> = ({ dishes }) => {
  const dispatch = useDispatch();
  const chef = useSelector((state: RootStore) => state.chef.chef);
  useEffect(() => {
    dispatch(getChef());
  }, []);

  if (!chef) return <div>Loading...</div>;
  return (
    <div className="weekly-chef-container">
      <h6>Chef of the week:</h6>
      <div className="chef-container">
        <div>
          <figure>
            {/* <img src={require(`../../${chef.image}`)} alt={chef.name} /> */}
            <img src={chef.image} alt={chef.name} />
            <figcaption>{chef.name}</figcaption>
          </figure>
        </div>
        <div>
          <p>{chef.description}</p>
        </div>
      </div>
      <MediaQuery maxWidth={600}>
        <ChefRestaurantCarousel dishes={dishes} />
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <ChefRestaurantTable dishes={dishes} />
      </MediaQuery>
    </div>
  );
};
