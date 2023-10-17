import './Header.css';
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const userToken = localStorage.getItem("userToken");
  return (
    <header>
      <h1>Autobahn</h1>
      <nav>
        {!userToken && <Link to="/login">Login</Link>}
        {!userToken && <Link to="/register">Register</Link>}
        {userToken && <Link to="/logout">Logout</Link>}
      </nav>
    </header>
  );
};

export default Header;
