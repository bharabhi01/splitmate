import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Dashboard from './pages/Dashboard';
import { Sidebar, SidebarPushable, Segment, Menu, MenuItem, Icon, Header, SidebarPusher } from 'semantic-ui-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); // Ensure state is set to false if no token
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />

          {localStorage.getItem('token') ? (
            <Route path="/dashboard" element={
              <SidebarPushable as={Segment}>
                <Sidebar
                  as={Menu}
                  animation='overlay'
                  icon='labeled'
                  onHide={() => setVisible(false)}
                  vertical
                  visible={true}
                  width='thin'
                >
                  <MenuItem as='a'>
                    <Icon name='home' />
                    Dashboard
                  </MenuItem>
                  <MenuItem as='a'>
                    <Icon name='gamepad' />
                    Budget Tracker
                  </MenuItem>
                  <MenuItem as='a'>
                    <Icon name='camera' />
                    Split Expenses
                  </MenuItem>
                  <MenuItem as='a'>
                    <Icon name='user' />
                    Abhishek Bhardwaj
                  </MenuItem>
                </Sidebar>

                <SidebarPusher>
                  <Dashboard />
                </SidebarPusher>
              </SidebarPushable>
            } />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
