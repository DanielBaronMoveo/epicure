// import { chefData, chefsData } from "../data/chef";
import { Chef } from "../interfaces/chef";
import axios from "axios";

const getChefData: () => Promise<Chef | undefined> = async () => {
  // return new Promise<Chef>((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(chefData);
  //   }, 2000);
  // });
  // find weekly chef
  const response = await axios.get("http://localhost:5000/chef/get");
  const chefs: Chef[] = response.data.chefs;
  const weeklyChef = chefs.find((chef) => chef.chefOfTheWeek);
  return weeklyChef;
};

const getAllChefs: () => Promise<Chef[]> = async () => {
  // return new Promise<Chef[]>((resolve) => {
  //   setTimeout(() => {
  //     resolve(chefsData);
  //   }, 2000);
  // });
  const response = await axios.get("http://localhost:5000/chef/get");
  return response.data.chefs;
};

const getChefById: (id: string | undefined) => Promise<Chef> = async (
  id: string | undefined
) => {
  // return new Promise<Chef | undefined>((resolve) => {
  //   setTimeout(() => {
  //     resolve(chefsData.find((chef) => chef._id === id));
  //   }, 2000);
  // });
  const response = await axios.get(`http://localhost:5000/chef/get/${id}`);
  return response.data.chef;
};

const ChefService = {
  getChefData,
  getAllChefs,
  getChefById,
};

export default ChefService;
