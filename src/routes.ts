import Checkout from "./pages/checkout";
import Chefs from "./pages/Chefs";
import Homepage from "./pages/Homepage";
import RestaurantDetails from "./pages/restaurants/RestaurantDetails";
import Restaurants from "./pages/restaurants/Restaurants";

export const routes = [
  {
    path: "/",
    element: Homepage,
  },
  {
    path: "/restaurants",
    element: Restaurants,
  },
  {
    path: "/restaurants/:id",
    element: RestaurantDetails,
  },
  {
    path: "/chefs",
    element: Chefs,
  },
  {
    path: "/checkout",
    element: Checkout,
  },
];
