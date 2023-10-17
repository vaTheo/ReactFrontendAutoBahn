import React from "react";
import Logout from "./components/Logout"; // Assume you have a Dashboard component
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from './pages/HomePage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Headers";

const App: React.FC = () => {
  const userToken = localStorage.getItem("userToken");

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/logout" element={<Logout />} />{" "}
        {/* Other routes go here */}
      </Routes>
    </Router>
  );

};

export default App;
