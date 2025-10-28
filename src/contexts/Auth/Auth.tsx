import React, { useState, useCallback } from "react";
import { googleLogin, login, signup } from "../../services/auth/auth.services";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../../configs/axiosConfig";
import type {
  IAuthContextType,
  IAuthProviderProps,
  IToastMessage,
} from "../../types/auth.types";
import { AuthContext } from "../../hooks/Auth/useAuth";

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("authToken")
  );
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<IToastMessage | null>(null);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({
        ...formState,
        [event.target.name]: event.target.value,
      });
    },
    [formState]
  );

  const showToast = (message: string, success: boolean, duration = 3000) => {
    setToastMessage({ message, success });
    setTimeout(() => setToastMessage(null), duration);
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.email || !formState.password) {
      showToast("Please fill in all fields", false);
      return;
    }

    setLoading(true);

    login(formState.email, formState.password)
      .then(() => {
        showToast(`Logged in successfully as ${formState.email}`, true, 2000);
        setIsAuthenticated(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/", { replace: true });
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        showToast(
          `Error logging in: ${error.response?.data?.message || error.message}`,
          false
        );
      });
  };

  const handleSignupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.email || !formState.password || !formState.confirmPassword) {
      showToast("Please fill in all fields", false);
      return;
    }

    if (formState.password !== formState.confirmPassword) {
      showToast("Passwords do not match", false);
      return;
    }

    setLoading(true);

    signup(formState.email, formState.password)
      .then(() => {
        showToast(`Signed up successfully as ${formState.email}`, true, 2000);
        setIsAuthenticated(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/", { replace: true });
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        showToast(
          `Error signing up: ${error.response?.data?.message || error.message}`,
          false
        );
      });
  };

  const handleGoogleLogin = (token: string) => {
    if (token === "") {
      showToast("Google Login Failed. Please try again.", false);
      return;
    }

    googleLogin(token)
      .then((response) => {
        showToast(
          `Logged in successfully as ${response.data?.email || response.email}`,
          true,
          2000
        );
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
        showToast(
          error.response?.data?.message || "Error logging in with Google",
          false
        );
      });
  };

  const logout = async (): Promise<void> => {
    try {
      setLoading(true);
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        const response = await axiosConfig.post("/api/auth/logout", {
          refreshToken,
        });

        if (response.status !== 200) {
          throw new Error("Logout failed");
        }
      }

      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      setTimeout(() => {
        setIsAuthenticated(false);
        window.location.href = "/login";
      }, 1000);
    } catch (error) {
      console.error("Logout error:", error);
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      setTimeout(() => {
        setIsAuthenticated(false);
        window.location.href = "/login";
      }, 1000);
    }
  };

  const value: IAuthContextType = {
    isAuthenticated,
    formState,
    loading,
    toastMessage,
    setToastMessage,
    handleChange,
    handleLoginSubmit,
    handleSignupSubmit,
    handleGoogleLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
