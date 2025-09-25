import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

const client = jwksClient({
  jwksUri: 'http://keycloak:8080/realms/school-realm/protocol/openid_connect/certs',
  cache: true,
  cacheMaxEntries: 5,
  cacheMaxAge: 600000,
});

function getKey(header, callback) {
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
    
    callback(null, signingKey);
  });
}

const authMiddleware = (req, res, next) => {
  console.log('🔐 Auth middleware called for:', req.method, req.path);
  
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    console.log('❌ No token provided');
    return res.status(401).json({ error: 'No token provided' });
  }

  console.log('🎫 Token received, verifying...');

  jwt.verify(token, getKey, {
    audience: 'school-admin',
    issuer: 'http://keycloak:8080/realms/school-realm',
    algorithms: ['RS256']
  }, (err, decoded) => {
    if (err) {
      console.error('❌ JWT verification failed:', err.message);
      return res.status(401).json({ error: 'Invalid token', details: err.message });
    }
    
    console.log('✅ Token verified for user:', decoded.preferred_username);
    
    // Check for admin role
    const realmAccess = decoded.realm_access || {};
    const roles = realmAccess.roles || [];
    
    if (!roles.includes('admin')) {
      console.log('❌ User does not have admin role');
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    console.log('✅ Admin role confirmed');
    req.user = decoded;
    next();
  });
};

export default authMiddleware;