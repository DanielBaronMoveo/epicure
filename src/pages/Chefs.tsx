import React, { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { getAllChefs } from "../store/chef/chef.action";
import { AppDispatch, RootStore } from "../store/store";

const Chefs = () => {
  const chefs = useSelector((state: RootStore) => state.chef.chefs);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (!chefs) {
      dispatch(getAllChefs());
    }
  }, []);
  const renderContent = () => {
    if (!chefs) {
      return (
        <div className="loader" style={{ width: "100%" }}>
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
    } else
      return (
        <div className="chefs-container">
          <h6>Chefs</h6>
          <div className="chef-nav-types">
            <ul className="clean-list flex">
              <li>All</li>
              <li>New</li>
              <li>Most Viewed</li>
            </ul>
          </div>
          <div className="card-container">
            {chefs.map((chef) => (
              <div className="card" key={chef.name}>
                <figure>
                  <img src={chef.image} alt={chef.name} />
                  <figcaption>{chef.name}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      );
  };

  return <div className="container space-header">{renderContent()}</div>;
};

export default Chefs;
