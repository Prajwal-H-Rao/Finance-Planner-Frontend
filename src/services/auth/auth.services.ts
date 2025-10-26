import axiosConfig from "../../configs/axiosConfig";

const login = async (email: string, password: string) => {
  try {
    const response = await axiosConfig.post("/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("authToken", response.data.accessToken);
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
    localStorage.setItem("authToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const googleLogin = async (tokenId: string) => {
  try {
    const response = await axiosConfig.post("/api/auth/google-login", {
      tokenId,
    });
    localStorage.setItem("authToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    console.log("Google login response:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const logout = async (): Promise<void> => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      await axiosConfig.post("/api/auth/logout", { refreshToken });
    }
  } catch (error) {
    console.error("Logout API failed:", error);
  } finally {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  }
};

export { login, signup, googleLogin, logout };
