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
import { authActions } from "./store/auth/auth.slice";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurants = useSelector(
    (state: RootStore) => state.restaurants.restaurants
  );

  const user = useSelector((state: RootStore) => state.auth.user);

  const error = useSelector((state: RootStore) => state.error);
  const dishes = useSelector((state: RootStore) => state.dishes.dishes);
  useEffect(() => {
    if (!restaurants) {
      dispatch(getRestaurantsAndDishes());
    }
    if (!dishes) {
      dispatch(getDishes());
    }
  }, []);
  // check if there is user in local storage if so set it in redux
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(authActions.setUser(JSON.parse(user)));
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
