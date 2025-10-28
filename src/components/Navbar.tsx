import { useTheme } from "../hooks/Theme/useTheme";
import useAuth from "../hooks/Auth/useAuth";
import Icon from "../assets/bankruptcy.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, loading, logout } = useAuth();
  const location = useLocation();

  const isAuthPage = ["/login", "/register"].includes(location.pathname);
  return (
    <nav className="navbar h-20 px-6 flex justify-between items-center">
      <div className="flex-1 flex items-center gap-2 h-full">
        <span className="h-full">
          <img className="w-15 h-5/6 " src={Icon} alt="Logo" />
        </span>
        <h1 className="text-4xl font-bold kannada pt-5 animated-text">
          ಕಾಸ್ ಇಲ್ಲ
        </h1>
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

        {/* Logout Button - Only show when authenticated */}
        {isAuthenticated && !isAuthPage && (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
