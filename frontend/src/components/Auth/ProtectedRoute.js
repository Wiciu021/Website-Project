import React, { useEffect, useState } from 'react';
import authService from '../../services/authService.js';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        console.log('Initializing Keycloak...');

        const authenticated = await authService.initKeycloak();

        console.log('Keycloak initialized, authenticated:', authenticated);
        setIsAuthenticated(authenticated);
        
        if (authenticated) {
          console.log('User is authenticated');
          console.log('User info:', authService.getUserInfo());
        } else {
          console.log('User is not authenticated, redirecting to login...');
          authService.login();
        }
      } catch (error) {
        console.log('User is not authenticated:', error);
        console.error('Auth initialization failed:', error);
      }
    };

    initAuth();
  }, []);

  return children;
};

export default ProtectedRoute;