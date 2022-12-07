import React from "react";
import { NavLink } from "react-router-dom";
import Restaurant from "../../interfaces/restaurant";

interface RestaurantNavbarProps {
  filteredRestaurants: Restaurant[] | null | undefined;
  filterRestaurants: any;
}

const RestaurantNavbar: React.FC<RestaurantNavbarProps> = ({
  filteredRestaurants,
  filterRestaurants,
}) => {
  return (
    <div className="nav-container">
      <h5>
        <NavLink
          className="clean-link"
          to="/restaurants"
          onClick={() => filterRestaurants("")}
        >
          All
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="clean-link"
          to="/restaurants/new"
          onClick={() => filterRestaurants("new")}
        >
          New
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="clean-link"
          to="/restaurants/most-popular"
          onClick={() => filterRestaurants("")}
        >
          Most Popular
        </NavLink>
      </h5>
      <h5>
        <NavLink
          className="clean-link"
          to="/restaurants/open-now"
          onClick={() => filterRestaurants("opennow")}
        >
          Open Now
        </NavLink>
      </h5>
    </div>
  );
};

export default RestaurantNavbar;
