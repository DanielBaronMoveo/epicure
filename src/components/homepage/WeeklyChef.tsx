import React, { useEffect } from "react";
import ChefRestaurantCarousel from "./ChefRestaurantCarousel";
import { Dish } from "../../interfaces/dish";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../../store/store";
import { getChef } from "../../store/chef/chef.action";
import ChefRestaurantTable from "./ChefRestaurantTable";
import { ThreeCircles } from "react-loader-spinner";

interface WeeklyChefProps {
  dishes: Dish[];
}

export const WeeklyChef: React.FC<WeeklyChefProps> = ({ dishes }) => {
  const dispatch = useDispatch<AppDispatch>();
  // const [isChef, setIsChef] = useState(true);
  const chef = useSelector((state: RootStore) => state.chef.chef);
  useEffect(() => {
    if (!chef) {
      dispatch(getChef());
    }
  }, []);

  if (!chef)
    return (
      <div className="flex justify-center align-center space-header">
        <ThreeCircles
          height="100"
          width="100"
          color="#F9F4EA"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  return (
    <div className="weekly-chef-container">
      <h6>Chef of the week:</h6>
      <div className="chef-container">
        <div className="chef-figure">
          <figure>
            <img src={chef.image} alt={chef.name} />
            <figcaption>{chef.name}</figcaption>
          </figure>
        </div>
        <div className="chef-desc">
          <p>{chef.description}</p>
        </div>
      </div>
      <ChefRestaurantCarousel dishes={dishes} isChef={true} />
      <ChefRestaurantTable dishes={dishes} />
    </div>
  );
};
