import keycloak from './keycloak.js';

class AuthService {
  constructor() {
    this.initialized = false;
    this.initPromise = null;
  }

  async initKeycloak() {
    // Prevent multiple initializations
    if (this.initPromise) {
      return this.initPromise;
    }

    if (this.initialized) {
      return keycloak.authenticated;
    }

    this.initPromise = keycloak.init({
      onLoad: 'check-sso',
      checkLoginIframe: false,
      pkceMethod: 'S256'
    }).then((authenticated) => {
      this.initialized = true;
      console.log('Keycloak initialized, authenticated:', authenticated);
      return authenticated;
    }).catch((error) => {
      console.error('Failed to initialize Keycloak', error);
      this.initPromise = null;
      return false;
    });

    return this.initPromise;
  }

  login() {
    return keycloak.login();
  }

  logout() {
    return keycloak.logout();
  }

  isAuthenticated() {
    return keycloak.authenticated;
  }

  getToken() {
    return keycloak.token;
  }

  async updateToken() {
    try {
      const refreshed = await keycloak.updateToken(5);
      if (refreshed) {
        console.log('Token refreshed');
      }
      return keycloak.token;
    } catch (error) {
      console.error('Failed to refresh token', error);
      throw error;
    }
  }

  getUserInfo() {
    return keycloak.tokenParsed;
  }
}

export default new AuthService();