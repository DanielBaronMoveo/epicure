import { chefData, chefsData } from "../data/chef";
import { Chef } from "../interfaces/chef";

const getChefData = () => {
  return new Promise<Chef>((resolve, reject) => {
    setTimeout(() => {
      resolve(chefData);
    }, 2000);
  });
};

const getAllChefs = () => {
  return new Promise<Chef[]>((resolve) => {
    setTimeout(() => {
      resolve(chefsData);
    }, 2000);
  });
};

const ChefService = {
  getChefData,
  getAllChefs,
};

export default ChefService;
