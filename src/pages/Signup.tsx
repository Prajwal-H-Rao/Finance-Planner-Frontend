import React from "react";
import useSignup from "../hooks/Auth/useSignup";
import Toast from "../components/Toast";
import Form from "../components/Form";
import { SignupFormConfig } from "../constants/Signup";

const Signup: React.FC = () => {
  const {
    formState,
    handleChange,
    handleSubmit,
    loading,
    toastMessage,
    handleGoogleLogin,
  } = useSignup();
  return (
    <div className=" flex-1 w-full  flex items-center">
      {toastMessage ? (
        <Toast
          toastMessage={toastMessage.message}
          success={toastMessage.success}
        />
      ) : null}
      <Form
        formConfig={SignupFormConfig}
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        buttonText="Signup"
        loadingText="Signing up..."
        handleGoogleLogin={handleGoogleLogin}
      />
    </div>
  );
};

export default Signup;
