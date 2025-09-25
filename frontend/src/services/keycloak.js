import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'school-realm', // Changed from 'master'
  clientId: 'school-admin'
});

export default keycloak;