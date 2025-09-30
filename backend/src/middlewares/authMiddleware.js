import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

console.log('Initializing JWKS client with URL:', 'http://keycloak:8080/realms/school-realm/protocol/openid-connect/certs');

const client = jwksClient({
  jwksUri: 'http://keycloak:8080/realms/school-realm/protocol/openid-connect/certs',
  cache: true,
  cacheMaxEntries: 5,
  cacheMaxAge: 600000, //zmienic potem
  requestAgent: null,
  requestHeaders: {},
  timeout: 30000
});

function getKey(header, callback) {
  console.log('Looking for key with kid:', header.kid);
  
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      console.error('Error getting signing key:', err);
      return callback(err);
    }
    
    if (!key) {
      console.error('No key found for kid:', header.kid);
      return callback(new Error('No key found'));
    }
    
    const signingKey = key.publicKey || key.rsaPublicKey;
    if (!signingKey) {
      console.error('No signing key available');
      return callback(new Error('No signing key available'));
    }
    
    console.log('✅ Key found successfully!');
    callback(null, signingKey);
  });
}

const authMiddleware = (req, res, next) => {
  console.log('Auth middleware called for:', req.method, req.originalUrl, '(path:', req.path, ')');
  
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ error: 'No token provided' });
  }

  /*try {
    const decoded = jwt.decode(token, { complete: true });
    console.log('Token header:', JSON.stringify(decoded?.header));
    console.log('Token issuer:', decoded?.payload?.iss);
    console.log('Token audience:', decoded?.payload?.aud);
  } catch (e) {
    console.log('Could not decode token for debugging');
  }*/

  jwt.verify(token, getKey, {
    audience: ['school-admin', 'account'], //account bo nie dziala samo school-admin nwm czemu
    issuer: 'http://localhost:8080/realms/school-realm', 
    algorithms: ['RS256']
  }, (err, decoded) => {
    if (err) {
      console.error('JWT verification failed:', err.message);
      return res.status(401).json({ error: 'Invalid token', details: err.message });
    }
    
    //console.log('Token verified for user:', decoded.preferred_username);
    
    const realmAccess = decoded.realm_access || {};
    const roles = realmAccess.roles || [];
    
    if (!roles.includes('admin')) {
      console.log('User does not have admin role'); //add user role check later
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    console.log('Admin role sigma');
    req.user = decoded;
    next();
  });
};

export default authMiddleware;