import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import UserPage from './UserPage';
import AdminPage from './AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([
    { username: 'sumedh', password: '12345', isAdmin: true }
  ]);

  const handleLogin = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleRegister = (username, password) => {
    const newUser = { username, password, isAdmin: false };
    setUsers([...users, newUser]);
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="container mt-3">
          <Routes>
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route
              path="/register"
              element={<RegisterPage onRegister={handleRegister} />}
            />
            <Route
              path="/user"
              element={isLoggedIn ? <UserPage user={currentUser} /> : <Navigate to="/login" />}
            />
            <Route
              path="/admin"
              element={isLoggedIn && currentUser?.isAdmin ? <AdminPage users={users} /> : <Navigate to="/login" />}
            />
            <Route
              path="/"
              element={<h2>Welcome to BikeRiderApp</h2>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
