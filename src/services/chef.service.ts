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

const getChefById = (id: string | undefined) => {
  return new Promise<Chef | undefined>((resolve) => {
    setTimeout(() => {
      resolve(chefsData.find((chef) => chef._id === id));
    }, 2000);
  });
};

const ChefService = {
  getChefData,
  getAllChefs,
  getChefById,
};

export default ChefService;
