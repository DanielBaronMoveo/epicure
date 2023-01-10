export interface Dish {
  _id: string;
  name: string;
  restaurant: {
    _id: string;
  };
  ingredients: string;
  image: string;
  icon: string;
  price: number;
  chef: string;
}
