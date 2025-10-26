import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import type { IFormprops } from "../types/form.types";
import { useNavigate } from "react-router-dom";

const Form: React.FC<IFormprops> = ({
  formConfig,
  formState,
  handleChange,
  handleSubmit,
  loading,
  buttonText = "Login",
  loadingText = "Logging in...",
  handleGoogleLogin,
}: IFormprops) => {
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google Token Response:", tokenResponse);
      handleGoogleLogin(tokenResponse.access_token);
      setTimeout(() => {
        setGoogleLoading(false);
        navigate("/", { replace: true });
      }, 3000);
      // Optionally: send tokenResponse.access_token to your backend
    },
    onError: (error) => {
      console.error("Google Login Failed:", error);
      handleGoogleLogin("");
      setGoogleLoading(false);
    },
  });

  const handleGoogleLoginButton = () => {
    setGoogleLoading(true);
    googleLogin();
  };

  return (
    <div className="relative mx-auto min-w-md min-h-max card bg-base-100 border border-primary/10 shadow-xl rounded-2xl">
      <div className="card-body">
        <h2 className="card-title justify-center text-xl">{buttonText}</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {formConfig.map((field, index) => (
            <div className="form-control" key={index}>
              <label className="label">
                <span className="text-base-content text-sm font-semibold">
                  {field.label}
                </span>
              </label>
              <input
                value={formState[field.name] || ""}
                onChange={handleChange}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="input border-secondary w-full rounded-2xl placeholder:text-xs"
              />
            </div>
          ))}

          {/* Normal login button */}
          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn border-secondary/20 animate-button w-full rounded-2xl flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  {loadingText}
                </>
              ) : (
                buttonText
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="divider my-2 text-sm text-base-content/60">or</div>

          {/* Google login button */}
          <div className="form-control mb-2">
            <button
              type="button"
              onClick={handleGoogleLoginButton}
              disabled={googleLoading}
              className="btn border-secondary/20 animate-button w-full rounded-2xl flex items-center justify-center gap-2"
            >
              {googleLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Signing in...
                </>
              ) : (
                <>
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google logo"
                    className="w-5 h-5"
                  />
                  Sign in with Google
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
