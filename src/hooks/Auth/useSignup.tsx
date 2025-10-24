import React from "react";
import { signup } from "../../services/auth/auth.services";
const useSignup = () => {
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
        setLoading(false);
        setToastMessage({
          message: `Signed up successfully as ${formState.email}`,
          success: true,
        });
        // Clear toast after 3 seconds
        setTimeout(() => setToastMessage(null), 3000);
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

  return {
    formState,
    handleChange,
    handleSubmit,
    loading,
    toastMessage,
  };
};

export default useSignup;
