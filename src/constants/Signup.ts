export const SignupFormConfig = [
  {
    label: "Email",
    type: "email",
    name: "email",
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    placeholder: "Email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    required: true,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
    placeholder: "Password",
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    required: true,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
    placeholder: "Confirm Password",
  },
];
