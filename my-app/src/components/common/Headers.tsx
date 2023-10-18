import "./Header.css";
import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../../Hook/userAuth";

const Header: React.FC = () => {
  const isAuthenticated = userAuth();
  const [userName, setUserName] = useState<string | null>(null); // Use state to store userName

  // Use effect to set userName from localStorage when the component mounts or isAuthenticated changes
  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, [isAuthenticated]);
  
    return (
    <header>
      <h1 className="title-header">
        {" "}
        <Link to="/">Autobahn</Link>
      </h1>
      <div className="elements-header">
        {isAuthenticated && (
          <h2 className="user-connected">user : {userName}</h2>
        )}
        {!isAuthenticated && (
          <h2 className="user-connected">No user connected</h2>
        )}

        <nav>
          {!isAuthenticated && <Link to="/login">Login</Link>}
          {!isAuthenticated && <Link to="/register">Register</Link>}
          {isAuthenticated && <Link to="/logout">Logout</Link>}
        </nav>
      </div>
    </header>
  );
};

export default Header;
