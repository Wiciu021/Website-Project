import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://auth.stronaxxlo.pl',
  realm: 'school-realm',
  clientId: 'school-admin'
});

export default keycloak;