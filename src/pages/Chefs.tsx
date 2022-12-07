import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChefs } from "../store/chef/chef.action";
import { RootStore } from "../store/store";

const Chefs = () => {
  const chefs = useSelector((state: RootStore) => state.chef.chefs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChefs());
  }, []);
  const renderContent = () => {
    if (!chefs) {
      return <div>Loading...</div>;
    } else
      return (
        <>
          <h6>Chefs</h6>
          <div className="card-container">
            {chefs.map((chef) => (
              <div className="card" key={chef.name}>
                <figure>
                  {/* <img src={require(`../../${chef.image}`)} alt={chef.name} /> */}
                  <img src={chef.image} alt={chef.name} />
                  <figcaption>{chef.name}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </>
      );
  };

  return <div className="chefs-container">{renderContent()}</div>;
};

export default Chefs;
