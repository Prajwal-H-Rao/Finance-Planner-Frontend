import type { FC } from "react";
import Form from "../components/Form";
import React from "react";
import Toast from "../components/Toast";

const Login: FC = () => {
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      setToastMessage(`Logged in successfully as ${formState.email}`);

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

  return (
    <div className=" flex-1 w-full  flex items-center">
      {toastMessage ? (
        <Toast toastMessage={toastMessage} success={false} />
      ) : null}
      <Form
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default Login;
