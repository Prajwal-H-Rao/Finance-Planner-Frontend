import { useTheme } from "../hooks/Theme/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar h-20 px-6 flex justify-between items-center  ">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 pt-2 kannada">ಕಾಸ್ ಇಲ್ಲ</h1>
      </div>

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

        {/* Theme Toggle */}
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
    </nav>
  );
};

export default Navbar;
