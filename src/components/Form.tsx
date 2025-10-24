import React from "react";

const Form: React.FC = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div className=" mx-auto min-w-md min-h-max card bg-base-300/60 border border-primary/10 shadow-xl rounded-2xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={formState.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-primary w-full rounded-2xl"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handleChange}
                value={formState.password}
                type="password"
                name="password"
                placeholder="Password"
                className="input input-primary w-full rounded-2xl"
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-2xl"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
