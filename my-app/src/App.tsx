// src/App.tsx

import React from 'react';
import MainPage from './components/mainPage';  // Assume you have a Dashboard component
import Login from './components/Login';
import Register from './components/Register';


const App: React.FC = () => {
  const userToken = localStorage.getItem('userToken');

  return (
    <div>
      {userToken ? <MainPage/> : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
};

export default App;
