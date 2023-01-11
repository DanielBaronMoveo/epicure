import axios from "axios";
import { AxiosError } from "axios";

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error: AxiosError<Error> | any) {
    console.log(error.response.data.error);
    throw new Error(error.response.data.error);
  }
};

const signup = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:5000/auth/signup", {
      email,
      password,
    });
    return response.data;
  } catch (error: AxiosError<Error> | any) {
    console.log(error.response.data.error);
    throw new Error(error.response.data.error);
  }
};

const AuthService = {
  login,
  signup,
};

export default AuthService;
