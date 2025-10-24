import React from "react";
const useSignup = () => {
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      setToastMessage(`Signed up successfully as ${formState.email}`);

      // Clear toast after 3 seconds
      setTimeout(() => setToastMessage(null), 3000);
    }, 3000);
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
