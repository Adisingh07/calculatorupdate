import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import UserContext from "../context/UserContext";
import { usePiSignIn } from "../utils/SignInWithPi"; // ⬅️ Pi Sign-In hook

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { signIn } = usePiSignIn(); // ⬅️ Use the custom hook

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("pi_user");
    setUser(null);
    navigate("/");
    window.location.reload(); // Optional: full reload
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* 👤 User Info */}
        <div className="user-header">
          {user ? (
            <>
              <p>👤 {user.username}</p>
              <button className="signout-btn" onClick={handleLogout}>
                🚪 Sign Out
              </button>
            </>
          ) : (
            <button className="signout-btn" onClick={signIn}>
              🔐 Sign In with Pi
            </button>
          )}
        </div>

        <h2>Calculator</h2>
        <ul>
          <li><Link to="/" onClick={closeSidebar}>🏠 Home</Link></li>
          <li><Link to="/basic" onClick={closeSidebar}>🧮 Basic Calculator</Link></li>
          <li><Link to="/advanced" onClick={closeSidebar}>📊 Advanced Calculator</Link></li>
          <li><Link to="/unit-converter" onClick={closeSidebar}>🔄 Unit Converter</Link></li>
          <li><Link to="/buy" onClick={closeSidebar}>🛒 Buy PDFs</Link></li>
          <li><Link to="/about" onClick={closeSidebar}>ℹ️ About</Link></li>
          <li><Link to="/contact" onClick={closeSidebar}>📞 Contact</Link></li>
          <li><Link to="/privacy-policy" onClick={closeSidebar}>🔒 Privacy Policy</Link></li>
          <li><Link to="/terms-of-service" onClick={closeSidebar}>📜 Terms of Service</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
