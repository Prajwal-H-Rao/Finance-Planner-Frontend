import React from "react";
import { login } from "../../services/auth/auth.services";
const useLogin = () => {
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
        setLoading(false);
        setToastMessage({
          message: `Logged in successfully as ${formState.email}`,
          success: true,
        });
        // Clear toast after 3 seconds
        setTimeout(() => setToastMessage(null), 3000);
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

  return {
    formState,
    handleChange,
    handleSubmit,
    loading,
    toastMessage,
  };
};

export default useLogin;
