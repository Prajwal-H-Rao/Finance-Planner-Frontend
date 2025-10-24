import type { FC } from "react";
import Form from "../components/Form";
import useLogin from "../hooks/Auth/useLogin";
import Toast from "../components/Toast";
import { LoginFormConfig } from "../constants/Login";

const Login: FC = () => {
  const { formState, handleChange, handleSubmit, loading, toastMessage } =
    useLogin();
  return (
    <div className=" flex-1 w-full  flex items-center">
      {toastMessage ? (
        <Toast
          toastMessage={toastMessage.message}
          success={toastMessage.success}
        />
      ) : null}
      <Form
        formConfig={LoginFormConfig}
        formState={formState}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default Login;
