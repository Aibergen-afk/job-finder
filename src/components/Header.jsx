import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          <h1>Job Finder</h1>
          <div className="header-actions">
            {user && <span className="user-name">👤 {user}</span>}
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? "Dark" : "Light"}
            </button>
            {user ? (
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink to="/login" className="login-link">Login</NavLink>
            )}
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/add">Add Job</NavLink>
          <NavLink to="/stats">Stats</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
