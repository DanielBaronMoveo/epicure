import React from "react";
import { default as arrowDown } from "../../assets/images/arrow-down.svg";
const RestaurantsFilter = () => {
  return (
    <div className="filter-container">
      <div>
        <button>
          Price Range <img src={arrowDown} alt="icon" />
        </button>
        <button>
          Distance <img src={arrowDown} alt="icon" />
        </button>
        <button>
          Rating <img src={arrowDown} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default RestaurantsFilter;
