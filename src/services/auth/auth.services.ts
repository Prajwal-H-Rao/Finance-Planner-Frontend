import axiosConfig from "../../configs/axiosConfig";

const login = async (email: string, password: string) => {
  try {
    const response = await axiosConfig.post("/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signup = async (email: string, password: string) => {
  try {
    const response = await axiosConfig.post("/api/auth/register", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { login, signup };
