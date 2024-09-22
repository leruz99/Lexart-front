import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="home">
      <h1>Bienvenido a Mi Aplicación</h1>
      <button className="login-button" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default Home;
