import React, { useState } from "react";
import { useTheme } from "../hooks/Theme/useTheme";
import axiosConfig from "../configs/axiosConfig"; // ✅ make sure this path matches your project
import Icon from "../assets/bankruptcy.png";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const logout = async (): Promise<void> => {
    try {
      setLoading(true);
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        const response = await axiosConfig.post("/api/auth/logout", {
          refreshToken,
        });

        if (response.status !== 200) {
          throw new Error("Logout failed");
        }
      }

      // Always clear tokens locally
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");

      // Redirect to login
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
      // still clear local data even if backend fails
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login";
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="navbar h-20 px-6 flex justify-between items-center">
      <div className="flex-1 flex items-center gap-2 h-full">
        <span className="h-full">
          <img className="w-15 h-5/6" src={Icon} alt="Logo" />
        </span>
        <h1 className="text-4xl font-bold kannada pt-5">ಕಾಸ್ ಇಲ್ಲ</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <label className="flex items-center cursor-pointer gap-2">
          {/* Light Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          <input
            type="checkbox"
            data-theme={theme}
            onChange={toggleTheme}
            className="toggle toggle-primary theme-controller"
          />

          {/* Dark Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {/* Logout Button */}
        <button
          onClick={logout}
          disabled={loading}
          className={`btn border-secondary/20 animate-button-error rounded-2xl flex items-center justify-center gap-2 ${
            loading ? "btn-disabled" : ""
          }`}
        >
          {loading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Logging out...
            </>
          ) : (
            "Logout"
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
