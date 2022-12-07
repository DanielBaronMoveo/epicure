import React from "react";
import { default as spicy } from "../../../assets/images/spicy-icon.svg";
import { default as vegetarian } from "../../../assets/images/vegetarian-icon.svg";
import { default as vegan } from "../../../assets/images/vegan-icon.svg";

const DishLabels = () => {
  return (
    <div className="dish-label-container">
      <h6>Signature dish of:</h6>
      <div className="label-wrapper">
        <div>
          <img src={spicy} alt="Spicy" width="44" />
          <p>Spicy</p>
        </div>
        <div>
          <img src={vegetarian} alt="Vegetarian" width="33" />
          <p>Vegetarian</p>
        </div>
        <div>
          <img src={vegan} alt="Vegan" width="37" />
          <p>Vegan</p>
        </div>
      </div>
    </div>
  );
};

export default DishLabels;
