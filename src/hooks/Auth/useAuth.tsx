import { createContext, useContext } from "react";
import type { IAuthContextType } from "../../types/auth.types";

export const AuthContext = createContext<IAuthContextType | undefined>(
  undefined
);

export const useAuth = (): IAuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
