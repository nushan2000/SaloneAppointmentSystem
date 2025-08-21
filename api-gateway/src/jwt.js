const jwt = require('jsonwebtoken');

exports.verifyJWT = (req, res, next) => {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
