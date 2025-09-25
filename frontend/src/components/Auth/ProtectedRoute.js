import React, { useEffect, useState } from 'react';
import authService from '../../services/authService.js';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      try {
        console.log('Initializing Keycloak...');
        const authenticated = await authService.initKeycloak();
        console.log('Keycloak initialized, authenticated:', authenticated);
        setIsAuthenticated(authenticated);
        
        if (authenticated) {
          console.log('User info:', authService.getUserInfo());
          console.log('Token:', authService.getToken());
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
        setError(error.message);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        🔐 Initializing authentication...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2>Authentication Error</h2>
        <p>Error: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2>Authentication Required</h2>
        <p>You need to login to access the admin panel.</p>
        <button 
          onClick={() => {
            console.log('Starting login...');
            authService.login();
          }}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Login with Keycloak
        </button>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;