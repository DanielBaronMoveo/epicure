import React, { useEffect } from "react";

import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Footer from "./components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootStore } from "./store/store";
import { getRestaurantsAndDishes } from "./store/restaurant/restaurant.action";
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );
  useEffect(() => {
    if (!restaurants) {
      dispatch(getRestaurantsAndDishes());
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
      </BrowserRouter>
    </>
  );
};

export default App;
