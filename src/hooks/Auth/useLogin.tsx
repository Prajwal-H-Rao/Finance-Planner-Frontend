import React from "react";
import { googleLogin, login } from "../../services/auth/auth.services";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<{
    message: string;
    success: boolean;
  } | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formState.email || !formState.password) {
      setToastMessage({ message: "Please fill in all fields", success: false });
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return;
    }

    setLoading(true);

    login(formState.email, formState.password)
      .then(() => {
        setToastMessage({
          message: `Logged in successfully as ${formState.email}`,
          success: true,
        });
        // Clear toast after 3 seconds
        setTimeout(() => {
          setLoading(false);
          setToastMessage(null);
          navigate("/", { replace: true });
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        setToastMessage({
          message: `Error logging in: ${error.response.data.message}`,
          success: false,
        });
        // Clear toast after 3 seconds
        setTimeout(() => setToastMessage(null), 3000);
      });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function handleGoogleLogin(token: string) {
    if (token === "") {
      setToastMessage({
        message: "Google Login Failed. Please try again.",
        success: false,
      });
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return;
    }

    googleLogin(token)
      .then((response) => {
        setToastMessage({
          message: `Logged in successfully as ${response.email}`,
          success: true,
        });
        setTimeout(() => {
          setToastMessage(null);
          navigate("/", { replace: true });
        }, 3000);
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
        setToastMessage({
          message: error.response?.message || "Error logging in with Google",
          success: false,
        });
        setTimeout(() => {
          setToastMessage(null);
        }, 3000);
      });
  }

  return {
    formState,
    handleChange,
    handleSubmit,
    loading,
    toastMessage,
    setToastMessage,
    handleGoogleLogin,
  };
};

export default useLogin;
