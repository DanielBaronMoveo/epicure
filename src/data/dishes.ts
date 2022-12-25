import { Dish } from "../interfaces/dish.d";
import padKiMaoImg from "../assets/images/dishes/pad-ki-mao.svg";
import garbanzoFritoImg from "../assets/images/dishes/garbanzo-frito.svg";
import smokedPizzaImg from "../assets/images/dishes/smoked-pizza.svg";
import masalaDosaImg from "../assets/images/dishes/masala-dosa.svg";
import seafoodPaellaImg from "../assets/images/dishes/seafood-paella.svg";
import redFarmImg from "../assets/images/dishes/redfarm.svg";
import tamalakoImg from "../assets/images/dishes/ta-ma-la-ko.svg";
import spicyIcon from "../assets/images/spicy-icon.svg";
import veganIcon from "../assets/images/vegan-icon.svg";
import vegetarianIcon from "../assets/images/vegetarian-icon.svg";
export const dishesData: Dish[] = [
  {
    _id: "D1",
    name: "Pad Ki Mao",
    restaurant: "Tiger Lilly",
    restaurantId: "1",
    ingredients:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut",
    image: padKiMaoImg,
    icon: spicyIcon,
    price: 88,
    chef: "Yanir Green",
  },
  {
    _id: "D2",
    name: "Garbanzo Frito",
    restaurant: "Kab Kem",
    restaurantId: "1",
    ingredients:
      "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    image: garbanzoFritoImg,
    icon: veganIcon,
    price: 98,
    chef: "Yariv Malili",
  },
  {
    _id: "D3",
    name: "Smoked Pizza",
    restaurant: "Popina",
    restaurantId: "1",
    ingredients: "Basil dough, cashew 'butter', demi-glace, bison & radish",
    image: smokedPizzaImg,
    icon: vegetarianIcon,
    price: 65,
    chef: "Ran Shmueli",
  },
  {
    _id: "D4",
    name: "Masala Dosa",
    restaurant: "Kab Kem",
    restaurantId: "1",
    ingredients:
      "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    image: masalaDosaImg,
    icon: veganIcon,
    price: 98,
    chef: "Yariv Malili",
  },
  {
    _id: "D5",
    name: "Seafood Paella",
    restaurant: "Kab Kem",
    restaurantId: "1",
    ingredients:
      "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    image: seafoodPaellaImg,
    icon: vegetarianIcon,
    price: 98,
    chef: "Shahaf Shabtay",
  },
  {
    _id: "D6",
    name: "Potato Chips",
    restaurant: "Kab Kem",
    restaurantId: "1",
    ingredients:
      "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    image: masalaDosaImg,
    icon: veganIcon,
    price: 98,
    chef: "Yariv Malili",
  },
  {
    _id: "D7",
    name: "Red Farm",
    restaurant: "Popina",
    restaurantId: "1",
    ingredients: "Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori",
    image: redFarmImg,
    icon: veganIcon,
    price: 98,
    chef: "Ran Shmueli",
  },
  {
    _id: "D8",
    name: "Ta Ma-La-Ko",
    restaurant: "Popina",
    restaurantId: "1",
    ingredients:
      "Green Papaya, Mango, Chukka, Chili, Mint, Kaffir, Lime, Cashew, Akaya, Cham",
    image: tamalakoImg,
    icon: spicyIcon,
    price: 98,
    chef: "Aviv Moshe",
  },
];
