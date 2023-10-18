import React from "react";
import Logout from "./components/Logout"; // Assume you have a Dashboard component
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import CreateGame from "./pages/CreateGame";
import { userAuth } from "./Hook/userAuth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/common/Headers";

const App: React.FC = () => {
  const isAuthenticated = userAuth();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/logout"
          element={isAuthenticated ? <Logout /> : <Navigate to="/" />}
        />
        <Route path="/CreateGame" element={<CreateGame />} />

        {/* Other routes go here */}
      </Routes>
    </Router>
  );
};

export default App;
