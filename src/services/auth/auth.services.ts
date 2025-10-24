import axiosConfig from "../../configs/axiosConfig";

const login = async (email: string, password: string) => {
  try {
    const response = await axiosConfig.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signup = async (email: string, password: string) => {
  try {
    const response = await axiosConfig.post("/signup", { email, password });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { login, signup };
