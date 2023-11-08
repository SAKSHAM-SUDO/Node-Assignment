const jwt = require("jsonwebtoken");
require('dotenv').config();

const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {

  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  // Extract the token (remove 'Bearer' prefix)
  const token = authHeader.replace('Bearer ', '');
  console.log(token);
  console.log(JWT_SECRET);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid token' });
  }

};

module.exports = { auth };
