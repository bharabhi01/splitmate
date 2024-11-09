import './App.css';
import GroupManager from './components/GroupManager';
import ExpenseTracker from './components/ExpenseTracker';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Signup from './auth/Signup';
import Login from './auth/Login';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogIn = (token) => {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setIsAuthenticated(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login onLogIn={handleLogIn} />} />

          {isAuthenticated ? (
            <>
              <Route path='/expenses' element={<ExpenseTracker />} />
              <Route path='/groups' element={<GroupManager />} />
              <Route path="/" element={<Navigate to="/expenses" />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
