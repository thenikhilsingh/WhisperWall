const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ message: "Unauthorized HTTP, Token not provided!" });
  }
  console.log("token from auth middleware", token);
  const jwtToken = token.replace("Bearer", "").trim(); //for removing Bearer and space from token

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = User.findOne({ email: isVerified.email }).select({
      password: 0, //to remove password from data
    });
    //creating custom properties
    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized. Invalid Token!" });
  }
};

module.exports = authMiddleware;
