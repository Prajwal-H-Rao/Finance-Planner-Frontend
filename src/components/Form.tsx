import React from "react";
import type { IFormprops } from "../types/form.types";

const Form: React.FC<IFormprops> = ({
  formConfig,
  formState,
  handleChange,
  handleSubmit,
  loading,
  buttonText = "Login",
  loadingText = "Logging in...",
}: IFormprops) => {
  return (
    <div className="relative mx-auto min-w-md min-h-max card bg-base-100 border border-primary/10 shadow-xl rounded-2xl">
      <div className="card-body">
        <h2 className="card-title justify-center text-xl">{buttonText}</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {formConfig.map((field, index) => {
            return (
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
            );
          })}
          <div className="form-control mt-6">
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
        </form>
      </div>
    </div>
  );
};

export default Form;
