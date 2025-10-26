import React from "react";
import { googleLogin, signup } from "../../services/auth/auth.services";
import { useNavigate } from "react-router-dom";
const useSignup = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<{
    message: string;
    success: boolean;
  } | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formState.email || !formState.password || !formState.confirmPassword) {
      setToastMessage({ message: "Please fill in all fields", success: false });
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return;
    }

    if (formState.password !== formState.confirmPassword) {
      setToastMessage({ message: "Passwords do not match", success: false });
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return;
    }
    setLoading(true);

    // Simulate async login
    signup(formState.email, formState.password)
      .then(() => {
        setToastMessage({
          message: `Signed up successfully as ${formState.email}`,
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
          message: `Error signing up: ${error.response.data.message}`,
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
          message: `Logged in successfully as ${response.data.email}`,
          success: true,
        });
        setTimeout(() => {
          setToastMessage(null);
          navigate("/", { replace: true });
        }, 2000);
      })
      .catch((error) => {
        setToastMessage({
          message:
            error.response?.data?.message || "Error logging in with Google",
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
    handleGoogleLogin,
    loading,
    toastMessage,
    setToastMessage,
  };
};

export default useSignup;
