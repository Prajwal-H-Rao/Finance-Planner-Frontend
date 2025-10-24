import axios from "axios";

// Create axios instance
const axiosConfig = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach access token
axiosConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle 401 and refresh token
axiosConfig.interceptors.response.use(
  (response) => response, // pass through successful responses
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token available");

        // Call your refresh endpoint
        const response = await axios.post(
          "http://localhost:5000/api/auth/refresh",
          { refreshToken }
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        // Save new tokens
        localStorage.setItem("accessToken", accessToken);
        if (newRefreshToken)
          localStorage.setItem("refreshToken", newRefreshToken);

        // Update original request header and retry
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosConfig(originalRequest);
      } catch (refreshError) {
        // If refresh fails, remove tokens and redirect to login
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosConfig;
