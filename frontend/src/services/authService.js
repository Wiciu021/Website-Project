import keycloak from './keycloak.js';

class AuthService {
  constructor() {
    this.initialized = false;
    this.initPromise = null;
  }

  async initKeycloak() {
    if (this.initPromise) {
      return this.initPromise;
    }

    if (this.initialized) {
      return keycloak.authenticated;
    }

    try {
      console.log('Initializing Keycloak...');
      this.initPromise = keycloak.init({
        onLoad: 'check-sso',
        checkLoginIframe: false,
        pkceMethod: 'S256'
      });
      
      const authenticated = await this.initPromise;
      this.initialized = true;
      console.log('Keycloak initialized, authenticated:', authenticated);

      return authenticated;
    } catch (error) {
      console.error('Failed to initialize Keycloak', error);

      this.initPromise = null;
      
      return false;
    }
  }

  login() {
    console.log('Redirecting to Keycloak login...');
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

  async updateToken(minValidity = 30) {
    try {
      const refreshed = await keycloak.updateToken(minValidity);
      console.log('Token refresh result:', refreshed ? 'refreshed' : 'still valid');
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