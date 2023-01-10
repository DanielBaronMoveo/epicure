import React, { useEffect } from "react";

import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Footer from "./components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootStore } from "./store/store";
import { getRestaurantsAndDishes } from "./store/restaurant/restaurant.action";
import { getDishes } from "./store/dish/dish.action";
import ScrollToTop from "./utils/scrollToTop";
import Error from "./components/error/Error";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  const error = useSelector((state: RootStore) => state.error);
  console.log(error, "error");

  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  useEffect(() => {
    if (!restaurants) {
      dispatch(getRestaurantsAndDishes());
    }
    if (!dishes) {
      dispatch(getDishes());
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div className="flex column space-between h-screen">
          <main>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
        {error.show && <Error />}
      </BrowserRouter>
    </>
  );
};

export default App;
