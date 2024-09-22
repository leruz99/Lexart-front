import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="header">
      <h1>Mi Aplicación</h1>
      {isAuthenticated ? (
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      ): (<button className="login-button" onClick={handleLogin}>
        Log In
      </button>) }
    </header>
  );
};

export default Header;
