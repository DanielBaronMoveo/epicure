interface Restaurant {
  _id: string;
  name: string;
  chef: [
    {
      _id: string;
      name: string;
    }
  ];
  opens: string;
  closes: string;
  thumb: string;
  image: string;
  dishes: string[];
  reviews: string[];
  latitude: string;
  longitude: string;
  stars: number;
}

export default Restaurant;
