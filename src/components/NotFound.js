import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotFound = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/productos');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isAuthenticated ? (
        <h2>Redirigiendo a Productos...</h2>
      ) : (
        <>
          <h2>404 - Ruta no encontrada</h2>
          <p>Lo sentimos, la ruta que estás buscando no existe.</p>
        </>
      )}
    </div>
  );
};

export default NotFound;
