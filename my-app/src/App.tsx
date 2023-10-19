import React from "react";
import Logout from "./components/Logout"; // Assume you have a Dashboard component
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import CreateGame from "./pages/CreateGame";
import Autobahn from "./pages/autobahn";
import Cards from "./components/card";

import { userAuth } from "./Hook/userAuth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/common/Headers";

// Creation of a wrapper to use the useLocation in tne next steps,
// permit an auto rerender of the header
const App: React.FC = () => {
  return (
    <Router>
      <Wrapper />
    </Router>
  );
};

const Wrapper: React.FC = () => {
  const isAuthenticated = userAuth();
  const location = useLocation();

  return (
    <>
      <Header key={location.pathname} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/logout"
          element={isAuthenticated ? <Logout /> : <Navigate to="/" />}
        />
        <Route path="/CreateGame" element={<CreateGame />} />
        <Route path="/autobahn" element={<Autobahn />} />
        <Route path="/cards" element={<Cards />} />

        {/* Other routes go here */}
      </Routes>
    </>
  );
};

export default App;
