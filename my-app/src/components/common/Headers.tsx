import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../../Hook/userAuth";

const Header: React.FC = () => {
  const isAuthenticated = userAuth();
  const userName = localStorage.getItem("userName") || null;

  return (
    <header>
      <h1 className="title-header">Autobahn</h1>
      <div className="elements-header">
        <h2 className="user-connected">user : {userName}</h2>
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
